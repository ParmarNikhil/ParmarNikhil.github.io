import './App.css';
import { Component } from 'react';
export default class App extends Component {
 
  render(){
    return (
        <header>
          <p>Nikhil's Portfolio</p>
          <ul className="menu">
          <li><a href="#homepage">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
        </header>

    );
    
  }
}
