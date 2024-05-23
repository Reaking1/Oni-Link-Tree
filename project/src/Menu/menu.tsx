import React, { useState } from 'react'
import './menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Menu:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    return (
        <div className="menu-container">
        <button className="menu-button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars}/>
        </button>
        {isOpen && (
            <div className="dropdown-menu">
                <p>Share Link tree to the following links</p>
                {/* Add the Link combo here */}
            </div>
        )}
        </div>
    )
}

export default Menu