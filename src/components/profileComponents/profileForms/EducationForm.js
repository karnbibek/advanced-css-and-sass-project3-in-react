import React from 'react';
import { reduxForm, Field } from 'redux-form';

const EducationForm = (props) => {

    const renderError = ({ touched, error }) => {
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

    const renderInput = ({ input, label, meta, type, place, cName }) => {
        return (
            <div className={`profile__form-body-field-ed${cName}`} >
                    <span className="text-small">{label}</span>
                    <input {...input} placeholder={place} type={type} className="input input-small" />
                    {renderError(meta)}
                </div>
        );
    };

    return (
        <form className="profile__form-body" onSubmit={props.handleSubmit(props.onSubmit)}>
            <Field name="degree" component={renderInput} label="Degree: " place="Degree" type="text" cName="" />
            <Field name="college" component={renderInput} label="College: " place="College" type="text" cName="" />
            <Field name="location" component={renderInput} label="Location: " place="Location" type="text" cName="" />
            <div className="profile__form-body-field-ed">
                <span className="text">Time Period : </span>
            </div>
            <div className="profile__form-body-field-ed">
            <Field name="startDate" component={renderInput} label="From: " place="Start Date" type="date" cName="-1" />
            <Field name="endDate" component={renderInput} label="To: " place="End Date" type="date" cName="-2" />
            </div>
            <button className="profile__form-body-button button" action="submit">
                Add
            </button>
        </form>
    );
}

const validate = formValues => {
    const errors = {};

    if (!formValues.degree) {
        errors.degree = "Degree is compulsory!!";
    }
    if (!formValues.college) {
        errors.college = "College is compulsory!!";
    }
    if (!formValues.location) {
        errors.location = "Location is compulsory!!";
    }
    if (!formValues.startDate) {
        errors.startDate = "Start Date is compulsory!!";
    }
    if (!formValues.endDate) {
        errors.endDate = "EndDate is compulsory!!";
    }

    return errors;
}

export default reduxForm({ form: "educationForm", validate })(EducationForm);