import './App.css';
import Header from "./Header.js";
import Homepage from "./components/Homepage.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
function App() {
  return (
    <div className="App">

      <Header />
      <Homepage />
      <About />
      <Projects />
      <Contact />
      </div>
  );
}

export default App;
