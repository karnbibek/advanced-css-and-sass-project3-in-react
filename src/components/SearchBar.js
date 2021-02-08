import React from 'react';

const SearchBar = ({nameChangeHandler, addressChangeHandler}) => {
    return (
        <div className="contents__search">
            <div className="contents__search-box">
            <span className="text">What : </span>
            <input
                type="text"
                placeholder="Jobs title, keyword or company"
                className="input"
                onChange={(e) => nameChangeHandler(e.target.value)}
            />
            </div>
            <div className="contents__search-box">
            <span className="text">Where : </span>
            <input
                type="text"
                placeholder="Enter city"
                className="input"
                onChange={(e) => addressChangeHandler(e.target.value)}
            />
            </div>
            <button className="contents__search-button">Find Jobs</button>

        </div>
    );
}

export default SearchBar;