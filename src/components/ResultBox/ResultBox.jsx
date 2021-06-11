import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultBox.css'

const ResultBox = ({ suggestionName }) => {

    const suggestionNameJsx = suggestionName.map(ele => {
        return <NameCard key={ele} suggestedName={ele}></NameCard>
    })

    return (
        <div className="result-container">
            {suggestionNameJsx}
        </div>
    )
}

export default ResultBox