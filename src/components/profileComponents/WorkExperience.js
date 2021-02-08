import React, { useEffect, useState } from 'react';

const WorkExperience = () => {

    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [showCard, setShowCard] = useState(false);
    const [error, setError] = useState('');
    const [workExperience, setWorkExperience] = useState([]);

    const onSubmit = async (event) => {
        if (!jobTitle || !company || !location || !startDate || !endDate) {
            await setError('Please enter all fields correctly!');
        }
        else {
            event.preventDefault();
            await setError(null);
            const workExperience = JSON.parse(localStorage.getItem("workExperience") || '[]');
            const workExp = { jobTitle, company, location, startDate, endDate };
            localStorage.setItem('workExperience', JSON.stringify([...workExperience, (workExp)]));
            await setWorkExperience([...workExperience, (workExp)]);
            await setShowCard(false);
        }
    }

    useEffect(() => {
        const showInformation = async () => {
            const info = JSON.parse(localStorage.getItem('workExperience'));
            await setWorkExperience(info);
        }
        showInformation();
    }, []);

    const removeHandler = (infoToDelete) => {
        const info = JSON.parse(localStorage.getItem('workExperience'));
        const filteredInfo = info.filter((i) => i.jobTitle !== infoToDelete.jobTitle);
        localStorage.setItem('workExperience', JSON.stringify(filteredInfo));
        setWorkExperience(filteredInfo);
    }

    return (
        <div className="profile__form">
            <div className="profile__form-header">
                <div className="profile__form-header-1">Work Experience : </div>
                <div className="profile__form-header-2 button" type="submit" onClick={() => setShowCard(!showCard)}>
                    {!showCard ? 'Add' : 'Cancel'}
                </div>
            </div>

            {showCard ? (
                <div className="profile__form-body" onSubmit={onSubmit}>
                    {error ?
                        (<div className="profile__form-body-error">
                            <p>{error}</p>
                        </div>)
                        : null}

                    <div className="profile__form-body-field-ed">
                        <span className="text-small">Job Title : </span>
                        <input type="text" placeholder="Job Title" defaultValue={jobTitle} onChange={e => setJobTitle(e.target.value)} className="input input-small" />
                    </div>
                    <div className="profile__form-body-field-ed">
                        <span className="text-small">Company : </span>
                        <input type="text" placeholder="Company" defaultValue={company} onChange={e => setCompany(e.target.value)} className="input input-small" />
                    </div>
                    <div className="profile__form-body-field-ed">
                        <span className="text-small">Location : </span>
                        <input type="text" placeholder="Location" defaultValue={location} onChange={e => setLocation(e.target.value)} className="input input-small" />
                    </div>
                    <div className="profile__form-body-field-ed">
                        <span className="text">Time Period</span>
                    </div>
                    <div className="profile__form-body-field-ed">
                        <div className="profile__form-body-field-ed-1">
                            <span className="text-small">From : </span>
                            <input type="date" placeholder="Date" defaultValue={startDate} onChange={e => setStartDate(e.target.value)} className="input input-small" />
                        </div>
                        <div className="profile__form-body-field-ed-2">
                            <span className="text-small">To : </span>
                            <input type="date" placeholder="Date" defaultValue={endDate} onChange={e => setEndDate(e.target.value)} className="input input-small" />
                        </div>
                    </div>
                    <button className="profile__form-body-button button" type="submit" onClick={onSubmit}>
                        Add
            </button>

                </div>
            ) : null}
            {workExperience ? (
                workExperience.map((info) => (
                    <div className="profile__form-details" key={info.jobTitle}>
                        <div className="profile__form-header">
                            <div className="profile__form-details-header">
                                {info.jobTitle}
                            </div>
                            <div className="profile__form-header-2-red button-small" onClick={() => removeHandler(info)}>
                                Remove
                            </div>
                        </div>

                            <div className="profile__form-details-summary">
                                {info.company}
                            </div>
                            <div className="profile__form-details-summary">
                                {info.location}
                            </div>
                            <div className="profile__form-details-summary">
                                {info.startDate} to {info.endDate}
                            </div>
                        </div>
                ))
            ) :
                null}
        </div>
    )
}

export default WorkExperience;