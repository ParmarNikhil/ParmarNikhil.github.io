import { Component } from 'react';
import '../App.css';
import photo from "../profile_photo.jpeg";
export default class Homepage extends Component {
  render(){
    return (
     
          <div className="homepage" id="homepage">
            <div>
              <img src={photo} alt="something"/>
            </div>
            <div>
              <p>Hey there, I'm Nikhil<br></br>
                 Welcome to my Website.</p>
            </div>
            
          </div>
    
     
      );
  }
    
}
