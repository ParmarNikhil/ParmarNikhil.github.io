import { Component } from 'react';
import '../App.css';
import git from "../github.png";
import insta from "../instagram.png";
import li from "../linkedin.jpg";
import gm from "../gmail.jpg";
export default class Contact extends Component {
  render(){
    return (
          <div className="contact" id="contact">
                
                
                <a href="https://github.com/ParmarNikhil/"><img src={git} alt="demo"/></a>
                <a href="https://www.instagram.com/nikhil._.parmar_/"><img src={insta} alt="demo"/></a>
                <a href="https://www.linkedin.com/in/nikhil-parmar-a92078209/"><img src={li} alt="demo"/></a>
                <a href="https://np0598029@gmail.com"><img src={gm} alt="demo"/></a>
                        
            
          </div>
      );
  }
    
}
