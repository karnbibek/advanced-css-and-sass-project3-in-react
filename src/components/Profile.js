import React from 'react';
import { connect } from 'react-redux';

import '../App.css';
import Education from './profileComponents/Education';
import PersonalInformation from './profileComponents/PersonalInformation';
import Skills from './profileComponents/Skills';
import WorkExperience from './profileComponents/WorkExperience';

const Profile = ({ isSignedIn }) => {

    if (!isSignedIn) {
        return (
            <div className="error">
                <div className="error-text">
                    Unauthorized route
                </div>
            </div>
        );
    }

    return (
        <div className="profile">
            <PersonalInformation />
            <WorkExperience />
            <Education />
            <Skills />
        </div>
    );
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps)(Profile);