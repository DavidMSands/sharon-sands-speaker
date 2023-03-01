import './App.css';
import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomeMain from './Home/HomeMain';
import FAQMain from './FAQ/FAQMain';
import MediaMain from './Media/MediaMain';
import ReferencesMain from './References/ReferencesMain';
import ContactMain from './Contact/ContactMain';
import AboutMain from './About/AboutMain';
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './ScrollToTop';
import NavBar from './Header/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <AnimatePresence> */}
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomeMain />} />
          <Route exact path="/about" element={<AboutMain />} />
          <Route exact path="/media" element={<MediaMain />} />
          <Route exact path="/faq" element={<FAQMain />} />
          <Route exact path="/references" element={<ReferencesMain />} />
          <Route exact path="/contact" element={<ContactMain />} />
        </Routes>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;
