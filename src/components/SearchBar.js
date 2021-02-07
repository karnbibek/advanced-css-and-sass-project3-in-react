import React from 'react';

const SearchBar = ({nameChangeHandler, addressChangeHandler}) => {
    return (
        <div className="content__search">
            <div className="content__search-box">
            <span className="content__search-box-text">What : </span>
            <input
                type="text"
                placeholder="Jobs title, keyword or company"
                className="content__search-box-input"
                onChange={(e) => nameChangeHandler(e.target.value)}
            />
            </div>
            <div className="content__search-box">
            <span className="content__search-box-text">Where :  </span>
            <input
                type="text"
                placeholder="Enter city"
                className="content__search-box-input"
                onChange={(e) => addressChangeHandler(e.target.value)}
            />
            </div>
            <button className="ui primary button">Find Jobs</button>

        </div>
    );
}

export default SearchBar;