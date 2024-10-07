import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';

import Navbar from './components/navbar';
import ContactUs from './components/contact-us';
import Home from './components/home';
import MemberSection from './components/MemberSection';
import AboutUs from './components/about-us';
import Footer from './components/footer';

function App() {
  const items = [
    {
      name: "AAyaaam",
      description: "AAyaaam",
      image: "/img1.jpeg"
    },
    {
       name: "AAyaaam",
      description: "AAyaaam",
      image: "/img1.jpeg"
    },
    {
       name: "AAyaaam",
      description: "AAyaaam",
      image: "/img1.jpeg"
    }
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home id="home" items={items} />
              <AboutUs id="about-us" />
              {/* <Highlights id="highlights" /> */}
            </>
          }
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="MemberSection" element={<MemberSection />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
