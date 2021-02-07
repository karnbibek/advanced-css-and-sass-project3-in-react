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
        }
        else {
            event.preventDefault();
            await setError(null);
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
        <div className="ui form">
            <div className="ui button primary right floated" type="submit" onClick={() => setShowCard(!showCard)}>
                {!showCard ? 'Add' : 'Cancel'}
            </div>
            <h2>Education</h2>
                {showCard ? (
            <div className="ui form error" onSubmit={onSubmit}>
                {error ?
                    (<div className="ui error message">
                        <p>{error}</p>
                    </div>)
                    : null}

                <div className="field">
                    <label>Degree</label>
                    <input type="text" placeholder="Degree" defaultValue={degree} onChange={e => setDegree(e.target.value)} />
                </div>
                <div className="field">
                    <label>College</label>
                    <input type="text" placeholder="College" defaultValue={college} onChange={e => setCollege(e.target.value)} />
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

            {educationDegree ? (
                educationDegree.map((info) => (
                    <div className="ui feed" key={info.degree}>
                        <div className="ui button red right floated" onClick={() => removeHandler(info)}>
                            Remove
                            </div>
                        <div className="content">
                            <div className="header">
                                <h3>{info.degree}</h3>
                            </div>
                            <div className="summary">
                                {info.college}
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

export default Education;