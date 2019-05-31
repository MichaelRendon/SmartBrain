import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import './App.css';

const particlesOptions = {
    particles: {
    	number: {
    		value:60,
    	density: {
    		enable: true,
    		value_area: 800
            }
        }
    }
}
            

function App() {
  return (
    <div className="App">
      <Particles className='particles' 
              params={particlesOptions}
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
