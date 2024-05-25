import React, { useState } from 'react'
import './menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faSnapchat } from '@fortawesome/free-brands-svg-icons';



const Menu:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    const shareUrl = '' //Replace the vercel link

    return (
        <div className="menu-container">
        <button className="menu-button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars}/>
        </button>
        {isOpen && (
            <div className="dropdown-menu">
               <h3>Share Link via the following sources</h3>
               <a  href={`https://www.snapchat.com/add?text=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <h4>SnapChat</h4>
                <FontAwesomeIcon icon={faSnapchat} />
               </a>
               <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <h4>LinkedIn</h4>
                <FontAwesomeIcon icon={faLinkedinIn} />
               </a>
               <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <h4>FaceBook</h4>
                <FontAwesomeIcon icon={faFacebook} />
               </a>
               <a href={`https://www.instagram.com/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                <h4>Instagram</h4>
                <FontAwesomeIcon icon={faInstagram} />
               </a>
            </div>
        )}
        </div>
    )
}

export default Menu