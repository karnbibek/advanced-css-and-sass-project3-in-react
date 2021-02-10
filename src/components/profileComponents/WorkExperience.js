import React, { useEffect, useState } from 'react';
import WorkForm from './profileForms/WorkForm';

const WorkExperience = () => {

    const [showCard, setShowCard] = useState(false);
    const [workExperience, setWorkExperience] = useState([]);

    const onSubmit = ({ jobTitle, company, location, startDate, endDate }) => {
            const workExperience = JSON.parse(localStorage.getItem("workExperience") || '[]');
            const workExp = { jobTitle, company, location, startDate, endDate };
            localStorage.setItem('workExperience', JSON.stringify([...workExperience, (workExp)]));
            setWorkExperience([...workExperience, (workExp)]);
            setShowCard(false);
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
                <WorkForm onSubmit={onSubmit} />
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