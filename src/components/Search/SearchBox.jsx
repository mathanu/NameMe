import React from 'react';
import './SearchBox.css'

const SearchBox = ({ onInputChange }) => {

    return (
        <div className="search-container">
            <input onChange={(eve) => onInputChange(eve.target.value)} placeholder="Type your text" className="search-text" />
        </div>


    )


}

export default SearchBox