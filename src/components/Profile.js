import React from 'react';
import '../App.css';

import Education from './profileComponents/Education';
import PersonalInformation from './profileComponents/PersonalInformation';
import Skills from './profileComponents/Skills';
import WorkExperience from './profileComponents/WorkExperience';

const Profile = () => {
    return (
        <div className="App">
            <PersonalInformation />
            <WorkExperience />
            <Education />
            <Skills />
        </div>
    );
}

export default Profile;