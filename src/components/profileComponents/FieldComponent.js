import React from 'react';
import { reduxForm, Field } from 'redux-form'

const FieldComponent = (props) => {

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
        // console.log(meta); // meta is used as it holds the error message.
        return (
            <>
                <div className={`profile__form-body-field-${cName}`} name="firstName">
                    <span className="text-small">{label}</span>
                    <input {...input} autoComplete="on" type="text" placeholder={`${place}`} className="input input-small" />
                    {renderError(meta)}
                </div>
            </>
        );
    }

    const renderArea = ({ input, label, meta, type, cName, place }) => {
        return (
            <div className="profile__form-body-description">
                <span className="text-small">Describe your position and accomplishments as Full Stack Developer.</span>
                <textarea {...input} rows="2" className="input profile__form-body-description-2"></textarea>
                {renderError(meta)}
            </div>
        );
    }

    return (
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <div className="profile__form-body-field">
                <Field name="firstName" component={renderInput} label="First Name: " type="text" cName='1' place='First Name' />
                <Field name="lastName" component={renderInput} label="Last Name: " type="text" cName='2' place='Last Name' />
            </div>

            <div className="profile__form-body-field">
                <Field name="email" component={renderInput} label="Email: " type="email" cName='1' place='Email' />
                <Field name="number" component={renderInput} label="Mobile Number:" type="number" cName='2' place='Mobile Number' />
            </div>

            <div className="profile__form-body-field">
                <Field name="city" component={renderInput} label="City: " type="text" cName='1' place='City' />
                <Field name="code" component={renderInput} label="Postal Code: " type="text" cName='2' place='Postal Code' />
            </div>

            <Field name="description" component={renderArea} type="text" />

            <button className="profile__form-body-button button" action="submit">
                {props.personalInfo ? 'Update' : 'Add'}
            </button>
        </form>
    );
}

const validate = formValues => {
    const errors = {};
    if (!formValues.firstName) {
        errors.firstName = "First Name is Compulsory!!";
    }
    if (!formValues.lastName) {
        errors.lastName = "Last Name is Compulsory!!";
    }
    if (!formValues.email) {
        errors.email = "Email is Compulsory!!";
    }
    if (!formValues.number) {
        errors.number = "Number is Compulsory!!";
    }
    if (!formValues.city) {
        errors.city = "City is Compulsory!!";
    }
    if (!formValues.code) {
        errors.code = "Code is Compulsory!!";
    }
    if (!formValues.description) {
        errors.description = "Description is Compulsory!!";
    }

    return errors;
}

export default reduxForm({ form: 'personalInformation', validate })(FieldComponent);