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
        <div className="ui form">
            <div className="ui button primary right floated" type="submit" onClick={() => setShowCard(!showCard)}>
                {!showCard ? 'Add' : 'Cancel'}
            </div>
            <h2>Work Experience</h2>
            {showCard ? (
                <div className="ui form error" onSubmit={onSubmit}>
                    {error ?
                        (<div className="ui error message">
                            <p>{error}</p>
                        </div>)
                        : null}

                    <div className="field">
                        <label>Job Title</label>
                        <input type="text" placeholder="Job Title" defaultValue={jobTitle} onChange={e => setJobTitle(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Company</label>
                        <input type="text" placeholder="Company" defaultValue={company} onChange={e => setCompany(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Location</label>
                        <input type="text" placeholder="Location" defaultValue={location} onChange={e => setLocation(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Time Period</label>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>From : </label>
                            <input type="date" placeholder="Date" defaultValue={startDate} onChange={e => setStartDate(e.target.value)} />
                        </div>
                        <div className="field">
                            <label>To : </label>
                            <input type="date" placeholder="Date" defaultValue={endDate} onChange={e => setEndDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="ui primary button" type="submit" onClick={onSubmit}>
                        Add
            </div>

                </div>
            ) : null}
            {workExperience ? (
                workExperience.map((info) => (
                    <div className="ui feed" key={info.jobTitle}>
                        <div className="ui button red right floated" onClick={() => removeHandler(info)}>
                            Remove
                            </div>
                        <div className="content">
                            <div className="header">
                                <h3>{info.jobTitle}</h3>
                            </div>
                            <div className="summary">
                                {info.company}
                            </div>
                            <div className="summary">
                                {info.location}
                            </div>
                            <div className="summary">
                                {info.startDate} to {info.endDate}
                            </div>
                        </div>
                    </div>
                ))
            ) :
                null}
        </div>
    )
}

export default WorkExperience;