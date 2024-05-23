import './App.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faCode, faKeyboard, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import AnimatedText from './Animated fonts/AnimatedFonts';
import Logo from './assets/Logo.jpeg'
import Menu from './Menu/menu';

function App() {
  useEffect(() => {
    // GSAP animation for the background
    gsap.to(".section_1", {
      backgroundPosition: "200% center",
      duration: 5,
      repeat: -1,
      ease: "linear"
    });

    // Animate icons
    const icons = document.querySelectorAll('.background-icon');
    icons.forEach(icon => {
      gsap.to(icon, {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-30, 30)',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });
  }, []);

  return (
    <>
      <div className="section_1">
        <Menu /> {/* Add the Menu component */}
        <div className="box">
          <img src={Logo} alt="Profile" className="profile-image" />
          <AnimatedText />
        </div>
        <div className="other_bar">
          <div className="rectangular-bar">Bar 1</div>
          <div className="rectangular-bar">Bar 2</div>
          <div className="rectangular-bar">Bar 3</div>
          <div className="rectangular-bar">Bar 4</div>
        </div>
        <div className="bars">
          <div className="bar">
            <FontAwesomeIcon icon={faTwitch} beat/>
          </div>
          <div className="bar">
            <FontAwesomeIcon icon={faInstagram} beat/>
          </div>
          <div className="bar">
            <FontAwesomeIcon icon={faYoutube} beat/>
          </div>
          <div className="bar">
            <FontAwesomeIcon icon={faTiktok} beat/>
          </div>
        </div>
        <div className="background-icons">
          <FontAwesomeIcon icon={faGamepad} className="background-icon" />
          <FontAwesomeIcon icon={faCode} className="background-icon" />
          <FontAwesomeIcon icon={faKeyboard} className="background-icon" />
          <FontAwesomeIcon icon={faLaptopCode} className="background-icon" />
          <FontAwesomeIcon icon={faMobileAlt} className="background-icon" />
          {/* Add more icons as needed */}
        </div>
      </div>
    </>
  );
}

export default App;

