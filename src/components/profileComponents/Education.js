import React, { useEffect, useState } from 'react';
import { reduxForm, Field } from 'redux-form';

const Education = ({ handleSubmit }) => {
// console.log(props.handleSubmit);
    const [showCard, setShowCard] = useState(false);
    const [educationDegree, setEducationDegree] = useState([]);

    const onSubmit = ({ degree, college, location, startDate, endDate }) => {
        const educationDegree = JSON.parse(localStorage.getItem("educationDegree") || '[]');
        const educat = { degree, college, location, startDate, endDate };
        // console.log(educat);
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

    const renderInput = ({ input, label, meta, type, cName, place }) => {
        console.log(input);
        return (
            <>
                <div className={`profile__form-body-field-ed${cName}`} >
                    <span className="text-small">{label}</span>
                    <input {...input} placeholder={place} type={type} className="input input-small" />
                    {renderError(meta)}
                </div>
            </>
        );
    }

    const renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="error">
                    <div className="error-text">
                        {error}
                    </div>
                </div>
            );
        }
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
                <form className="profile__form-body" onSubmit={handleSubmit(onSubmit)}>


                    <Field name="degree" component={renderInput} label="Degree: " place="Degree" type="text" cName='' />

                    <Field name="college" component={renderInput} place="College" label="College: " type="text" cName='' />

                    <Field name="location" component={renderInput} place="Location" label="Location: " type="text" cName='' />

                    <div className="profile__form-body-field-ed">
                        <span className="text">Time Period : </span>
                    </div>
                    <div className="profile__form-body-field-ed">

                        <Field name="startDate" component={renderInput} label="From: " type="date" cName='-1' />
                        <Field name="endDate" component={renderInput} label="To: " type="date" cName='-2' />

                    </div>
                    <button className="profile__form-body-button button" action="submit">
                        Add
                    </button>

                </form>
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

const validate = formValues => {
    const errors = {};
    // console.log(formValues);

    if (!formValues.degree) {
        errors.degree = "Degree is Compulsory!!";
    }
    if (!formValues.college) {
        errors.college = "College is Compulsory!!";
    }
    if (!formValues.location) {
        errors.location = "Location is Compulsory!!";
    }
    if (!formValues.startDate) {
        errors.startDate = "Start Date is Compulsory!!";
    }
    if (!formValues.endDate) {
        errors.endDate = "End Date is Compulsory!!";
    }

    return errors;
}

export default reduxForm({ form: "Education", validate })(Education);