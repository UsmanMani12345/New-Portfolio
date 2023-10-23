import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import About from './About/About';
import Skill from './Skill/Skill';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Aboutus from './About/Aboutus';
import Contactus from './Contact/Contactus';
import Skills from './Skill/Skills';
import Ourservices from './Services/Ourservices';


function AllComponents() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skill/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllComponents />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/ourservices" element={<Ourservices />} />


      </Routes>
    </Router>
  );
}

export default App;