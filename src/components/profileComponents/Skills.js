import React, { useEffect, useState } from 'react';

const Skills = () => {

    const [skill, setSkill] = useState('');
    const [rating, setRating] = useState('');

    const [showCard, setShowCard] = useState(false);
    const [error, setError] = useState('');
    const [skillRating, setSkillRating] = useState([]);

    const onSubmit = async (event) => {
        if (!skill || !rating || rating > 10 || rating < 0) {
            await setError('Please enter all fields correctly!');
        }
        else {
            event.preventDefault();
            await setError(null);
            const skillRating = JSON.parse(localStorage.getItem("skillRating") || '[]');
            const skillRate = { skill, rating };
            localStorage.setItem('skillRating', JSON.stringify([...skillRating, (skillRate)]));
            await setSkillRating([...skillRating, (skillRate)]);
            await setShowCard(false);
            await setSkill('');
            await setRating('');
        }
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

    return (
        <div className="profile__form">
            <div className="profile__form-header">
                <div className="profile__form-header-1">Skills : </div>
                <button className="profile__form-header-2 button" type="submit" onClick={() => setShowCard(!showCard)}>
                    {!showCard ? 'Add' : 'Cancel'}
                </button>
            </div>
            {showCard ? (
                <div className="profile__form-body" onSubmit={onSubmit}>
                    {error ?
                        (<div className="profile__form-body-error">
                            <p>{error}</p>
                        </div>)
                        : null}

                    <div className="profile__form-body-field-ed">
                        <span className="text-small">Skill/Technology Name : </span>
                        <input type="text" placeholder="Skill/Technology Name" defaultValue={skill} onChange={e => setSkill(e.target.value)} className="input input-small" />
                    </div>
                    <div className="profile__form-body-field-ed">
                        <span className="text-small">Rating Out of 10 : </span>
                        <input type="number" placeholder="Rating Out of 10" defaultValue={rating} onChange={e => setRating(e.target.value)} className="input input-small" />
                    </div>
                    <button className="profile__form-body-button button" type="submit" onClick={onSubmit}>
                        Add
                </button>

                </div>
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

export default Skills;