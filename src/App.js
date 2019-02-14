import React, { Component } from 'react';
import './App.css';
import Audio from './components/audio';

import Message from './components/message';


class App extends Component {
  render() {
 return(
 	<div>

 		<Audio />
      <div className="App">
        
       <div className="heart"></div>
      
        
      </div>
      <Message />

      

      

     </div>
      
      
      


    );
  }
}

export default App;
