import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import About from './components//About/About';
import Contact from './components/Contact/Contact';
import Members from './components/Members/Members';
import Gallery from './components/Gallery/Gallery';
import LoginForm from './components/LoginForm/LoginForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
