import React from 'react';
import { connect } from 'react-redux';

import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import GoogleAuth from './authentication/GoogleAuth';

const Navbar = (props) => {

    const history = useHistory();

    const homePage = () => {
        history.push('/');
    }

    const profilePage = () => {
        history.push('/profile');
    }

    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="item" onClick={homePage}>
                    Home
                </div>
                {props.auth.isSignedIn ?
                    <div className="item" onClick={profilePage}>
                    Go To Profile
                </div> : null}
                <div className="navbar__left-link">
                    <Link to="/companies" target="_blank" className="navbar__left-link-comp">See Companies Jobs</Link>

                </div>
            </div>
            <GoogleAuth />
        </div>
    );
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Navbar);