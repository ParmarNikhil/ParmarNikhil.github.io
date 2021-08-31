import { Component } from 'react';
import '../App.css';
export default class About extends Component {
  render(){
    return (
      <div className="about-container">
        
          <div className="about" id="about">
            <h2 style={{fontSize:30}} className="abh2"><span>I'm a student</span></h2>
            <p className="about-text" id="aboutt">
              <span>
             I'm currently pursuing my masters degree in computer technology at GLS University ahmedabad,
             I have knowledge of programming languages like python, javascript, Java. 
             </span>
            </p>
            <p className="about-text">
              <span>always ready to learn and explore new things and stay consistent to my work.</span>
            </p>
            
            <p className="about-text">
            <span>
            I have created some projects in python and javascript you can check them in projects section.
            </span>
            </p>
                                 
          </div>
         
          </div>
      );
  }
    
}
