import './App.css';
import Navbar from './Components/Navbar';
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"



function App() {
  console.log(window.location)
  let component
  switch (window.location.pathname) {
    case "/Digital_Portfolio":
      component = <Home />
      break
    case "/About":
      component = <About />
      break
    case "/Contact":
      component = <Contact />
      break
    case "/Projects":
      component = <Projects />
      break
    case "/Services":
      component = <Services />
      break
  }
  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
