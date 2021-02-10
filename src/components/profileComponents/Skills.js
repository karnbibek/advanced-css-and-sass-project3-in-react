import React, { useEffect, useState } from 'react';
import { reduxForm, Field } from 'redux-form';

const Skills = ({ handleSubmit }) => {

    // const [skill, setSkill] = useState('');
    // const [rating, setRating] = useState('');

    const [showCard, setShowCard] = useState(false);
    // const [error, setError] = useState('');
    const [skillRating, setSkillRating] = useState([]);

    const onSubmit = ({ skill, rating }) => {
        
        console.log(skill);
        const skillRating = JSON.parse(localStorage.getItem("skillRating") || '[]');
        const skillRate = { skill, rating };
        localStorage.setItem('skillRating', JSON.stringify([...skillRating, (skillRate)]));
        setSkillRating([...skillRating, (skillRate)]);
        setShowCard(false);
        
    }

    useEffect(() => {
        const showInformation = async () => {
            const info = JSON.parse(localStorage.getItem('skillRating'));
            await setSkillRating(info);
        }
        showInformation();
    }, []);

    const removeHandler = (infoToDelete) => {
        const info = JSON.parse(localStorage.getItem('skillRating'));
        const filteredInfo = info.filter((i) => i.skill !== infoToDelete.skill);
        localStorage.setItem('skillRating', JSON.stringify(filteredInfo));
        setSkillRating(filteredInfo);
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

    const renderInput = ({ input, label, meta, type, place }) => {
        return (
            <div className="profile__form-body-field-ed">
                <span className="text-small">{label}</span>
                <input {...input} type="text" autoComplete="on" placeholder={place} className="input input-small" />
                {renderError(meta)}
            </div>
        );
    }

    return (
        <div className="profile__form">
            <div className="profile__form-header">
                <div className="profile__form-header-1">Skills : </div>
                <button className="profile__form-header-2 button" type="submit" onClick={() => setShowCard(!showCard)}>
                    {!showCard ? 'Add' : 'Cancel'}
                </button>
            </div>
            {showCard ? (
                <form className="profile__form-body" onSubmit={handleSubmit(onSubmit)}>
                    
                    <Field name="skill" component={renderInput} label="Skill/Technology Name : " place='Skill/Technology Name' />
                    <Field name="rating" component={renderInput} label="Rating Out of 10 : " place='Rating Out of 10' />

                    <button className="profile__form-body-button button" action="submit">
                        Add
                    </button>

                </form>
            ) : null}

            {skillRating ? (
                skillRating.map((info) => (
                    <div className="profile__form-details" key={info.skill}>
                        <div className="profile__form-header">
                            <div className="profile__form-details-header">
                                {info.skill}
                            </div>
                            <div className="profile__form-header-2-red button-small" onClick={() => removeHandler(info)}>
                                Remove
                            </div>
                        </div>
                        <div className="profile__form-details-summary">
                            Rating : {info.rating}/10
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
    console.log(formValues);
    if (!formValues.skill) {
        errors.skill = "Skill is mandatory";
    }

    if (!formValues.rating) {
        errors.rating = "Rating is mandatory";
    }

    return errors;
}

export default reduxForm({ form: "skills", validate })(Skills);