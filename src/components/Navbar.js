import React from 'react';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import GoogleAuth from './authentication/GoogleAuth';

const Navbar = () => {
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
                <div className="item" onClick={profilePage}>
                    Go To Profile
                </div>
                <div className="navbar__left-link">
                    <Link to="/companies" target="_blank" className="navbar__left-link-comp">See Companies Jobs</Link>

                </div>
            </div>
            <GoogleAuth />
        </div>
    );
}

export default Navbar;