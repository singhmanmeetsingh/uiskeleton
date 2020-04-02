import React from 'react';
import './landing1.css';
import Particles from 'react-particles-js';

function Landing1() {
  return (
    <>
    <header>
      <Particles 
        style={{
                background: `black` 
         }}
        params={{ 
          particles: { 
            number: { 
              value: 100, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
          },
          interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                }
            }
        } 
        }} 
      />
    </header>
    <div>
      text
    </div>
    </>

  );
}

export default Landing1;
