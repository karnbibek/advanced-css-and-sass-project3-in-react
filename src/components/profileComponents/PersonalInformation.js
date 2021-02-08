import React, { useEffect, useState } from 'react';

const PersonalInformation = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [personalInfo, setPersonalInfo] = useState([]);
    const [showCard, setShowCard] = useState(false);

    const onSubmit = async (event) => {
        if (!firstName || !lastName || !email || !number || !city || !code || !description) {
            await setError('Please enter all fields correctly!');
            console.log(firstName);
            setTimeout(() => {
                setError('');
            }, 2000);
        }
        else {
            event.preventDefault();
            await setError('');
            const personalInfo = { firstName, lastName, email, number, city, code, description };
            localStorage.setItem('personal', JSON.stringify(personalInfo));
            await setShowCard(false);
            showInformation();
        }
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
                <div className="profile__form-body" onSubmit={onSubmit}>
                    {error ?
                        (<div className="profile__form-body-error">
                            <p>{error}</p>
                        </div>)
                    : null}

                    <div className="profile__form-body-field">
                        {/* <div className="two fields"> */}
                            <div className="profile__form-body-field-1" value={firstName} name="firstName">
                                <span className="text-small">First Name : </span>
                                <input type="text" placeholder="First name" defaultValue={firstName} onChange={e => setFirstName(e.target.value)} className="input input-small" />
                            </div>
                            <div className="profile__form-body-field-2" value={lastName} name="lastName">
                                <span className="text-small">Last Name : </span>
                                <input type="text" placeholder="Last Name" defaultValue={lastName} onChange={e => setLastName(e.target.value)} className="input input-small" />
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="profile__form-body-field">
                        {/* <div className="two fields"> */}
                            <div className="profile__form-body-field-1" value={email} name="email">
                                <span className="text-small">Email : </span>
                                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className="input input-small" />
                            </div>
                            <div className="profile__form-body-field-2" value={number} name="number">
                                <span className="text-small">Mobile Number : </span>
                                <input type="number" placeholder="Mobile Number" onChange={e => setNumber(e.target.value)} className="input input-small" />
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="profile__form-body-field">
                        {/* <div className="two fields"> */}
                            <div className="profile__form-body-field-1" value={city} name="city">
                                <span className="text-small">City : </span>
                                <input type="text" placeholder="City" onChange={e => setCity(e.target.value)} className="input input-small" />
                            </div>
                            <div className="profile__form-body-field-2" value={code} name="code">
                                <span className="text-small">Postal Code : </span>
                                <input type="text" placeholder="Postal Code" onChange={e => setCode(e.target.value)} className="input input-small" />
                            </div>
                        {/* </div> */}
                    </div>

                    <div className="profile__form-body-description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}>
                        <span className="text-small">Describe your position and accomplishments as Full Stack Developer.</span>
                        <textarea rows="2" className="input profile__form-body-description-2"></textarea>
                    </div>
                    <button className="profile__form-body-button button" type="submit" onClick={onSubmit}>
                        {personalInfo ? 'Update' : 'Add'}
                    </button>
                </div>
            ) : null}

            {personalInfo ? (
                <div className="profile__form-details">
                    {/* <div className="content"> */}
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
                    {/* </div> */}
                </div>
            ) :
                null
            }
        </div >

    )
}

export default PersonalInformation;