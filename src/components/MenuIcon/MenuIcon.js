import './MenuIcon.css';
import React from 'react';

const MenuIcon = ({ onClick, checked }) => {
    return (
        <label for="check">
            <input type="checkbox" id="check" onChange={onClick} checked={checked}/> 
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}

export default MenuIcon;