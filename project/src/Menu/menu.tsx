import React, { useEffect, useRef, useState } from 'react'
import './menu.css'
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faSnapchat } from '@fortawesome/free-brands-svg-icons';



const Menu:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log('Menu toggled, isOpen:', !isOpen);
    };

    useEffect(() => {
        console.log('Menu state changed:', isOpen);
        if (menuRef.current) {
            if (isOpen) {
                gsap.to(menuRef.current, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power1.out' });
            } else {
                gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.5, ease: 'power1.in' });
            }
        }
    }, [isOpen]);

    const shareUrl = '' //Replace the vercel link

    return (
        <div className="menu-container">
            <button className="menu-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="dropdown-menu" ref={menuRef}>
                <h3>Share Link via the following sources</h3>
                <div className="icon-to-link">
                    <a href={`https://www.snapchat.com/add?text=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSnapchat} className="fa-icon" />
                        <span>SnapChat</span>
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} className="fa-icon" />
                        <span>LinkedIn</span>
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
                        <span>FaceBook</span>
                    </a>
                    <a href={`https://www.instagram.com/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu