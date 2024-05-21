import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import './Animated.css'


const AnimatedText: React.FC = () => {
    useEffect(() => {
        const textElements = document.querySelectorAll('.animated-text')

        textElements.forEach((el) =>  {
            gsap.fromTo(el,
                {color: '#3FF32C'},
                {
                    color: '#ffff',
                    repeat: -1,
                    yoyo: true,
                    ease:'power1.inOut',
                    duration: 1.5
                });
        });
    }, [])

    return (
        <div className="animated-conatainer">
            <h1 className="animated-text">Developer/Streamer</h1>
        </div>
    )
}

export default AnimatedText