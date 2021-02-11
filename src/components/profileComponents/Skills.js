import React, { useEffect, useState } from 'react';
import SkillsForm from './profileForms/SkillsForm';

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

    return (
        <div className="profile__form">
            <div className="profile__form-header">
                <div className="profile__form-header-1">Skills : </div>
                <button className="profile__form-header-2 button" type="submit" onClick={() => setShowCard(!showCard)}>
                    {!showCard ? 'Add' : 'Cancel'}
                </button>
            </div>
            {showCard ? (
                <SkillsForm onSubmit={onSubmit} />
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