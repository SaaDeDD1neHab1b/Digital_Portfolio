import './App.css';
import Navbar from './Components/Navbar';
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import { Route, Routes, useNavigate} from "react-router-dom"
import Footer from "./Components/Footer"
import SideBar from './Components/SideBar';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    if (window.location.href === window.location.origin + "/") navigate("Digital_portfolio")
  }, []);


  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <section>
        <SideBar />
        <Routes>
          <Route path="/Digital_portfolio" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <SideBar />
      </section>

      <Footer />
    </div>
  );
}

export default App;
