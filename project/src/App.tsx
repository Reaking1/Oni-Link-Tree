import './App.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
 import { ToastContainer, toast }  from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
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

  const handleRectangularBarClick = ()  => {
    toast.info("The website is still under construction")
  }

  return (
    <>
     <Menu /> {/* Add the Menu component */}
      <div className="section_1">

        <div className="box">
          <img src={Logo} alt="Profile" className="profile-image" />
          <AnimatedText />
        </div>
        <div className="other_bar">
          <div className="rectangular-bar" onClick={handleRectangularBarClick}>
            <h3>
              Oni Website
            </h3>
          </div>
          <div className="rectangular-bar" onClick={handleRectangularBarClick}>
            <h3>
              Portfolio
            </h3>
          </div>
          <div className="rectangular-bar" onClick={handleRectangularBarClick}>
            <h3>
              Blog
            </h3>
          </div>
          <div className="rectangular-bar" onClick={handleRectangularBarClick}>
            <h3>
              Anime Top tier least of the week
            </h3>
          </div>
        </div>
        <div className="bars">
          <div className="bar">
           <a href='https://www.twitch.tv/theghostking2003'> <FontAwesomeIcon icon={faTwitch} beat/> </a>
          </div>
          <div className="bar">
           <a  href='https://www.instagram.com/theghostking2003/'><FontAwesomeIcon icon={faInstagram} beat/></a>
          </div>
          <div className="bar">
            <a href='https://www.youtube.com/channel/UCKr7PWRY5DoeWqHQGb29iPA'> <FontAwesomeIcon icon={faYoutube} beat/> </a>
          </div>
          <div className="bar">
           <a  href='https://www.tiktok.com/@theghostking2003?is_from_webapp=1&sender_device=pc'> <FontAwesomeIcon icon={faTiktok} beat/> </a>
          </div>
        </div>
        <div className="background-icons">
  <FontAwesomeIcon icon={faGamepad} className="background-icon" data-testid="gamepad-icon" />
  <FontAwesomeIcon icon={faCode} className="background-icon" data-testid="code-icon" />
  <FontAwesomeIcon icon={faKeyboard} className="background-icon" data-testid="keyboard-icon" />
  <FontAwesomeIcon icon={faLaptopCode} className="background-icon" data-testid="laptop-code-icon" />
  <FontAwesomeIcon icon={faMobileAlt} className="background-icon" data-testid="mobile-alt-icon" />
</div>

      </div>
      <ToastContainer />
    </>
  );
}

export default App;

