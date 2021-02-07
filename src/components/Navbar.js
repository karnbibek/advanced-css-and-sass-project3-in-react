import React, { useState } from 'react';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();

    const [page1, setPage1] = useState('');
    const [page2, setPage2] = useState('');
    const [page3, setPage3] = useState('');

    const homePage = () => {
        setPage1('active');
        setPage2('');
        setPage3('');
        history.push('/');
    }

    const profilePage = () => {
        setPage1('');
        setPage3('');
        setPage2('active');
        history.push('/profile');
    }

    return (
        <div className="navbar">
            <div className="navbar__left">
            <div className={`item ${page1} ui green button`} onClick={homePage}>
                Home
            </div>
            <div className={`item ${page2} ui red button`} onClick={profilePage}>
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