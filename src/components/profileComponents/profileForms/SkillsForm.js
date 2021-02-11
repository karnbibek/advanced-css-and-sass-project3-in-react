import React from 'react';
import { reduxForm, Field } from 'redux-form'

const SkillsForm = (props) => {

    const renderError = ({ error, touched }) => {
        if (touched && error) {
            return (<div className="error">
                <div className="error-text">
                    {error}
                </div>
            </div>)
        }
    }

    const renderInput = ({ input, label, meta, type, place }) => {
        return (
            <div className="profile__form-body-field-ed">
                <span className="text-small">{label}</span>
                <input {...input} type={type} placeholder={place} className="input input-small" />
                {renderError(meta)}
            </div>
        );
    }

    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)} className="profile__form-body">
            <Field name="skill" component={renderInput} label="Skill: " type="text" place='Skill' />
            <Field name="rating" component={renderInput} label="Rating: " type="text" place='Rating Out of 10' />

            <button className="profile__form-body-button button" action="submit">
                Add
            </button>
        </form>
    );
}

const validate = formValues => {
    const errors = {};
    if (!formValues.skill) {
        errors.skill = "Skill Name is Compulsory!!";
    }
    if (!formValues.rating) {
        errors.rating = "Rating is Compulsory!!";
    }

    return errors;
}

export default reduxForm({ form: 'skillsForm', validate })(SkillsForm);