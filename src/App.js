import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import EdTech from './pages/EdTech';
import ITServices from './pages/ITServices';
import Courses from './pages/Courses';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edtech" element={<EdTech />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;