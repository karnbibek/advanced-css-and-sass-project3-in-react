import React, { useEffect, useState } from 'react';
import FieldComponent from './FieldComponent';

const PersonalInformation = () => {

    const [error, setError] = useState('');
    const [personalInfo, setPersonalInfo] = useState([]);
    const [showCard, setShowCard] = useState(false);

    const onSubmit = ({ firstName, lastName, email, number, city, code, description }) => {
        const personalInfo = { firstName, lastName, email, number, city, code, description };
        localStorage.setItem('personal', JSON.stringify(personalInfo));
        setShowCard(false);
        showInformation();
    }

    const showInformation = async () => {
        const info = JSON.parse(localStorage.getItem('personal'));
        await setPersonalInfo(info);
        await setError('');
    }

    useEffect(() => {
        showInformation();
    }, []);

    return (
        <div className="profile__form">
            <div className="profile__form-header">
                <div className="profile__form-header-1">Personal Information</div>
                <button className="profile__form-header-2 button" type="submit" onClick={() => setShowCard(!showCard)}>
                    {!showCard ? <>{personalInfo ? 'Update' : 'Add'}</> : 'Cancel'}
                </button>
            </div>
            {showCard ? (
                <div className="profile__form-body">
                    {error ?
                        (<div className="profile__form-body-error">
                            <p>{error}</p>
                        </div>)
                        : null}

                    <FieldComponent personalInfo={personalInfo} onSubmit={onSubmit} />
                </div>
            ) : null}

            {personalInfo ? (
                <div className="profile__form-details">
                    <div className="profile__form-details-header">
                        <h3>{personalInfo.firstName} {personalInfo.lastName}</h3>
                    </div>
                    <div className="profile__form-details-summary">
                        Email: {personalInfo.email}
                    </div>
                    <div className="profile__form-details-summary">
                        Address: {personalInfo.city}
                    </div>
                    <div className="profile__form-details-summary">
                        Phone Number: {personalInfo.number}
                    </div>
                    <div className="profile__form-details-summary">
                        Description: {personalInfo.description}
                    </div>
                </div>
            ) :
                null
            }
        </div >

    )
}

export default PersonalInformation;