import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import './App.css';

const app = new Clarifai.App({
 apiKey: '37e93993b0e14aedbb084f9aaa8eb5ee'
});


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
       
class App extends Component {
	constructor() {
		super();
		this.state= {
			input: '',
		}
	}


onInputChange = (event) => {
	console.log(event.target.value);
}

onButtonSubmit= () => {
	console.log('click');
	app.models.predict("a403429f2ddf4b49b307e318f00e528b", 
		"https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
}

render() {
  return (
    <div className="App">
      <Particles className='particles' 
              params={particlesOptions}
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      {/*<FaceRecognition />*/}
    </div>
    );
  }
}

export default App;
