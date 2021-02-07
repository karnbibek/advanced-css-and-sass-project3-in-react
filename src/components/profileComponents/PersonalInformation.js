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

    // const FormField = ({ firstLabel, firstType, firstPlaceholder, secondLabel, secondType, secondPlaceholder, name1, name2 }) => {
    //     return (
    //         <div className="field">
    //             <div className="two fields">
    //                 <div className="required field" name={name1} value="firstName">
    //                     <label>{firstLabel}</label>
    //                     <input type={firstType} placeholder={firstPlaceholder} onChange={e => changeHandler(setFirstName,e)} />
    //                 </div>
    //                 <div className="required field" name={name2}>
    //                     <label>{secondLabel}</label>
    //                     <input type={secondType} placeholder={secondPlaceholder} />
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    // const changeHandler = async (setValue,e) => {
    //     e.preventDefault();
    //     await setValue(e.target.value);
    //     console.log(firstName);
    // }

    const onSubmit = async (event) => {
        if (!firstName || !lastName || !email || !number || !city || !code || !description) {
            await setError('Please enter all fields correctly!');
            console.log(firstName);
        }
        else {
            event.preventDefault();
            await setError('');
            console.log(error);
            // const personal = JSON.parse(localStorage.getItem("personal") || '[]');
            // console.log(personal);
            const personalInfo = { firstName, lastName, email, number, city, code, description };
            // personal.push(personalInfo);
            localStorage.setItem('personal', JSON.stringify(personalInfo));
            await setShowCard(false);
            showInformation();
            // setEmail('');
            // setNumber('');
            // setCity('');
            // setCode('');
            // setDescription('');
        }
    }

    const showInformation = async () => {
        const info = JSON.parse(localStorage.getItem('personal'));
        await setPersonalInfo(info);
        await setError('');
        // return (<div>Hello</div>);
    }

    useEffect(() => {
        showInformation();
    }, []);

    return (
        <div className="ui form">
            <div className="ui button primary right floated" type="submit" onClick={() => setShowCard(!showCard)}>
                {!showCard ? 'Add' : 'Cancel'}
            </div>
            <h2>Personal Information</h2>
            {showCard ? (
                <div className="ui form error" onSubmit={onSubmit}>
                    {error ?
                        (<div className="ui error message">
                            <p>{error}</p>
                        </div>)
                        : null}

                    <div className="field">
                        <div className="two fields">
                            <div className="required field" value={firstName} name="firstName">
                                <label>First Name</label>
                                <input type="text" placeholder="First name" defaultValue={firstName} onChange={e => setFirstName(e.target.value)} />
                            </div>
                            <div className="required field" value={lastName} name="lastName">
                                <label>Last Name</label>
                                <input type="text" placeholder="Last Name" defaultValue={lastName} onChange={e => setLastName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="two fields">
                            <div className="required field" value={email} name="email">
                                <label>Email</label>
                                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="required field" value={number} name="number">
                                <label>Mobile Number</label>
                                <input type="number" placeholder="Mobile Number" onChange={e => setNumber(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="two fields">
                            <div className="required field" value={city} name="city">
                                <label>City</label>
                                <input type="text" placeholder="City" onChange={e => setCity(e.target.value)} />
                            </div>
                            <div className="required field" value={code} name="code">
                                <label>Postal Code</label>
                                <input type="text" placeholder="Postal Code" onChange={e => setCode(e.target.value)} />
                            </div>
                        </div>
                    </div>

            {/* <FormField firstLabel="First Name" firstType="text" firstPlaceholder="First Name" secondLabel="Last Name" secondType="text" secondPlaceholder="Last Name" name1="firstName" name2="LastName" /> */}
            {/* <FormField firstLabel="Email" firstType="email" firstPlaceholder="Email" secondLabel="Mobile Number" secondType="number" secondPlaceholder="Mobile Number" name1="Email" name2="Number" />
            <FormField firstLabel="City" firstType="text" firstPlaceholder="City" secondLabel="Postal Code" secondType="text" secondPlaceholder="Postal Code" name1="City" name2="Code" /> */}

            <div className="required field" name="description" value={description} onChange={(e) => setDescription(e.target.value)}>
                <label>Describe your position and accomplishments as Full Stack Developer.</label>
                <textarea rows="2"></textarea>
            </div>
            <div className="ui primary button" type="submit" onClick={onSubmit}>
                Add
            </div>
            </div>
            ) : null}

            {personalInfo ? (
                    <div className="ui feed">
                        <div className="content">
                            <div className="header">
                                <h3>{personalInfo.firstName} {personalInfo.lastName}</h3>
                            </div>
                            <div className="summary">
                                {personalInfo.email}
                            </div>
                            <div className="summary">
                                {personalInfo.city}
                            </div>
                            <div className="summary">
                                {personalInfo.number}
                            </div>
                            <div className="summary">
                                {personalInfo.description}
                            </div>
                        </div>
                    </div>
            ) :
                null
            }
        </div >

    )
}

export default PersonalInformation;