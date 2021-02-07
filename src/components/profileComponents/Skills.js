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
        <div className="ui form">
            <div className="ui button primary right floated" type="submit" onClick={() => setShowCard(!showCard)}>
                {!showCard ? 'Add' : 'Cancel'}
            </div>
            <h2>Skills</h2>
                {showCard ? (
            <div className="ui form error" onSubmit={onSubmit}>
                {error ?
                    (<div className="ui error message">
                        <p>{error}</p>
                    </div>)
                    : null}

                <div className="field">
                    <label>Skill/Technology Name</label>
                    <input type="text" placeholder="Skill/Technology Name" defaultValue={skill} onChange={e => setSkill(e.target.value)} />
                </div>
                <div className="field">
                    <label>Rating Out of 10</label>
                    <input type="number" placeholder="Rating Out of 10" defaultValue={rating} onChange={e => setRating(e.target.value)} />
                </div>
                <div className="ui primary button" type="submit" onClick={onSubmit}>
                    Add
                </div> 

            </div>
            ) : null}

            {skillRating ? (
                skillRating.map((info) => (
                    <div className="ui feed" key={info.skill}>
                        <div className="ui button red right floated" onClick={() => removeHandler(info)}>
                            Remove
                            </div>
                        <div className="content">
                            <div className="header">
                                <h3>{info.skill}</h3>
                            </div>
                            <div className="summary">
                                Rating : {info.rating}/10
                            </div>
                        </div>
                    </div>
                ))
            ) :
                null}
        </div>
    )
}

export default Skills;