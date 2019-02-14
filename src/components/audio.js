import React, { Component } from 'react';
import './audio.css';

class Audio extends Component {
  render() {
 return(

 		<div className="container">

 			<iframe width="10%" height="0" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/353585157&color=%23343536&auto_play=true&hide_related=false&show_comments=true&show_user=true&hide_related=false&show_comments=flase&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe>

	    </div>


    );
  }
}

export default Audio;
