import { Component } from 'react';
import '../App.css';
export default class Projects extends Component {
  render(){
    return (
      
          <div className="projects" id="projects">
              <div className="project">
                <p style={{margin:0, fontSize:22}}>FoodZilla</p>
                <p>it's an online recipe web application built in javascript(ReactJs)</p>
                <a href="https://github.com/ParmarNikhil/FoodZilla-Web"><button>Github Link</button></a>
                <a href="https://ParmarNikhil.github.io/FoodZilla-Web"><button>Check live</button></a>
              </div>
              <div className="project">
              <p style={{margin:0, fontSize:22}}>Quizzo</p>
                <p>it's an online quiz application built in python(Django Framework) </p>
                <a href="https://github.com/ParmarNikhil/Quizzo"><button className="ghlink">Github Link</button></a>
             
              </div>
              <div className="project">
              <p style={{margin:0, fontSize:22}}>TodoList</p>
                <p>it's a simple todo app built in javascript(ReactJs)</p>
                <a href="https://github.com/ParmarNikhil/TodoApp"><button className="ghlink">Github Link</button></a>
                <a href="https://ParmarNikhil.github.io/TodoApp"><button className="ghlink">Check live</button></a>
              </div>  
          </div>

      );
  }
    
}
