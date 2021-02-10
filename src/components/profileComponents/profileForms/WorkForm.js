import React from 'react';
import { reduxForm, Field } from 'redux-form'

const WorkForm = (props) => {

    const renderError = ({ error, touched }) => {
        if (touched && error) {
            return (<div className="error">
                <div className="error-text">
                    {error}
                </div>
            </div>)
        }
    }

    const renderInput = ({ input, label, meta, type, cName, place }) => {
        return (
            <>
                <div className="profile__form-body-field-ed">
                    <span className="text-small">{label}</span>
                    <input {...input} placeholder={place} className="input input-small" type={type} />
                    {renderError(meta)}
                </div>
            </>
        );
    }

    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)} className="profile__form-body">
                <Field name="jobTitle" component={renderInput} label="Job Title: " type="text" cName='' place='Job Title' />
                <Field name="company" component={renderInput} label="Company: " type="text" cName='' place='Company' />
                <Field name="location" component={renderInput} label="Location: " type="text" cName='' place='Location' />
                <div className="profile__form-body-field-ed">
                    <span className="text">Time Period</span>
                </div>
                <Field name="startDate" component={renderInput} label="From: " type="date" cName='' place='Start Date' />
                <Field name="endDate" component={renderInput} label="To: " type="date" cName='' place='End Date' />
                
            <button className="profile__form-body-button button" action="submit">
                Add
            </button>
        </form>
    );
}

const validate = formValues => {
    const errors = {};
    if (!formValues.jobTitle) {
        errors.jobTitle = "Job Title is Compulsory!!";
    }
    if (!formValues.company) {
        errors.company = "Company is Compulsory!!";
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

export default reduxForm({ form: 'workExperience', validate })(WorkForm);