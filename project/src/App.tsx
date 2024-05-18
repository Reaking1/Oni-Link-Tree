import './App.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
 
function App() {
  useEffect(() => {
    // GSAP animation for the background
    gsap.to(".section_1", {
      backgroundPosition: "200% center",
      duration: 5,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <>
      <div className="section_1">
        <div className="box">
          <img src="path-to-your-image.png" alt="Profile" className="profile-image" />
          <h1>Developer/Streamer</h1>
        </div>
         {/* Add Scrap paper bars */}
        <div className="bars">
          <div className="bar">
            <FontAwesomeIcon icon={faTwitch} beatFade/>
          </div>
          <div className="bar">
          <FontAwesomeIcon icon={faInstagram} beatFade/>
          </div>
          <div className="bar">
          <FontAwesomeIcon icon={faYoutube} beatFade/>
          </div>
           {/* Add links to the icons */}
          <div className="bar">
          <FontAwesomeIcon icon={faTiktok} beatFade/>
          </div>
          {/* Add more bars with icons as needed */}
        </div>
      </div>
    </>
  );
}

export default App;
