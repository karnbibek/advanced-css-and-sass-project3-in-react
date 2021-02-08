import React, { useEffect, useState } from 'react';

const Education = () => {

    const [degree, setDegree] = useState('');
    const [college, setCollege] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [showCard, setShowCard] = useState(false);
    const [error, setError] = useState('');
    const [educationDegree, setEducationDegree] = useState([]);

    const onSubmit = async (event) => {
        if (!degree || !college || !location) {
            await setError('Please enter all fields correctly!');
            setTimeout(() => {
                setError('');
            }, 2000);
        }
        else {
            event.preventDefault();
            await setError('');
            const educationDegree = JSON.parse(localStorage.getItem("educationDegree") || '[]');
            const educat = { degree, college, location, startDate, endDate };
            localStorage.setItem('educationDegree', JSON.stringify([...educationDegree, (educat)]));
            await setEducationDegree([...educationDegree, (educat)]);
            await setShowCard(false);
            await setDegree('');
            await setCollege('');
            await setLocation('');
        }
    }

    useEffect(() => {
        const showInformation = async () => {
            const info = JSON.parse(localStorage.getItem('educationDegree'));
            await setEducationDegree(info);
        }
        showInformation();
    }, []);

    const removeHandler = (infoToDelete) => {
        const info = JSON.parse(localStorage.getItem('educationDegree'));
        const filteredInfo = info.filter((i) => i.degree !== infoToDelete.degree);
        localStorage.setItem('educationDegree', JSON.stringify(filteredInfo));
        setEducationDegree(filteredInfo);
    }

    return (
        <div className="profile__form">
            <div className="profile__form-header">
                <div className="profile__form-header-1">Education : </div>
                <button className="profile__form-header-2 button" type="submit" onClick={() => setShowCard(!showCard)}>
                    {!showCard ? 'Add' : 'Cancel'}
                </button>
            </div>
            {showCard ? (
                <div className="profile__form-body" onSubmit={onSubmit}>
                    {error ?
                        (<div className="profile__form-body-error">
                            <p>{error}</p>
                        </div>)
                        : null}

                    <div className="profile__form-body-field-ed">
                        <span className="text-small">Degree : </span>
                        <input type="text" placeholder="Degree" defaultValue={degree} onChange={e => setDegree(e.target.value)} className="input input-small" />
                    </div>

                    <div className="profile__form-body-field-ed">
                        <span className="text-small">College : </span>
                        <input type="text" placeholder="College" defaultValue={college} onChange={e => setCollege(e.target.value)} className="input input-small" />
                    </div>
                    <div className="profile__form-body-field-ed">
                        <span className="text-small">Location : </span>
                        <input type="text" placeholder="Location" defaultValue={location} onChange={e => setLocation(e.target.value)} className="input input-small" />
                    </div>
                    <div className="profile__form-body-field-ed">
                        <span className="text">Time Period : </span>
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

            {educationDegree ? (
                educationDegree.map((info) => (
                    <div className="profile__form-details" key={info.degree}>
            <div className="profile__form-header">
                            <div className="profile__form-details-header">
                                {info.degree}
                            </div>
                        <div className="profile__form-header-2-red button-small" onClick={() => removeHandler(info)}>
                            Remove
                            </div>
                            </div>
                        {/* <div className="content"> */}
                            <div className="profile__form-details-summary">
                                {info.college}
                            </div>
                            <div className="profile__form-details-summary">
                                {info.location}
                            </div>
                            <div className="profile__form-details-summary">
                                {info.startDate} to {info.endDate}
                            </div>
                        {/* </div> */}
                    </div>
                ))
            ) :
                null}
        </div>
    )
}

export default Education;