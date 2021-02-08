import React from 'react';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

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
            </div>
            <div className="navbar__right">
                <Link to="/companies" target="_blank" className="navbar__right-link">See Companies Jobs</Link>
            </div>
        </div>
    );
}

export default Navbar;