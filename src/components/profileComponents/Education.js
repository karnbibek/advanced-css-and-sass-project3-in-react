import React, { useEffect, useState } from 'react';
import EducationForm from './profileForms/EducationForm';

const Education = ({ handleSubmit }) => {
    const [showCard, setShowCard] = useState(false);
    const [educationDegree, setEducationDegree] = useState([]);

    const onSubmit = ({ degree, college, location, startDate, endDate }) => {
        const educationDegree = JSON.parse(localStorage.getItem("educationDegree") || '[]');
        const educat = { degree, college, location, startDate, endDate };
        localStorage.setItem('educationDegree', JSON.stringify([...educationDegree, (educat)]));
        setEducationDegree([...educationDegree, (educat)]);
        setShowCard(false);
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
                    {showCard ? 'Cancel' : 'Add'}
                </button>
            </div>
            {showCard ? (

                <EducationForm onSubmit={onSubmit} />
            
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
                        <div className="profile__form-details-summary">
                            {info.college}
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

export default Education;