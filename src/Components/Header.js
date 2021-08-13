import React from 'react'
import logo from '../logo.svg';
import './Header.css';
function Header() {
    return(<div className="Header">

        <img src={logo} alt="logo" className="logo" />
        <h2>Simple React App</h2>

    </div>)
}

export default Header
