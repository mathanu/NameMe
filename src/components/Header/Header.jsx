import React from 'react';
import './Header.css'
import logo from '../../images/undraw_mobile_ux_re_59hr.png'


const Header = ({ headerTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img
                src={logo} className={`head-image ${headerExpanded ? 'head-image-exp' : 'head-image-shrink'}`} alt="headerImage"
            />
            <h1 className="head-text"> {headerTitle}</h1>
        </div>
    )
}

export default Header