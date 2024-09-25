import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import ContactUs from './components/contact-us';
import Home from './components/home';
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
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
