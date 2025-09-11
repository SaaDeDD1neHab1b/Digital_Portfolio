import './App.css';
import Navbar from './Components/Navbar';
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Digital_portfolio" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
