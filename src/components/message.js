import React, { Component } from 'react';
import './message.css';
import Countdown from './countdown.js';

class  Message  extends  Component {

  render() {
    
    return (
      <div className="Message">
        <header className="Message-header">
        <h2>"Persistent echo in this room."</h2>
          <Countdown date={`2012-10-15T12:42:00`}/>
          <h3 className="Message-text">
            
          This timer is every day, hour, minute and second since we first spoke. 
          If, out of time, I could pick one moment and keep it shining, always new, of all the days that I have lived, I’d pick the moment I met you. I love you fully from now until the end of time, Happy Valentines Day dearest wife of mine.
          <br/>

          </h3>
            <br/>
           <p>
    		</p>
        </header>
      </div>
    );
  }
}

export  default  Message ;