import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import TestPage from './TestPage';
import WebsitesPage from './WebsitesPage';
import ModelsPage from './ModelsPage';
import VideosPage from './VideosPage';
import ContactPage from './ContactPage.js';
import AboutPage from './AboutPage';

const homePageStyles = {
  body: {
    height: '100vh', 
    margin: 0,       
    padding: 0,      
  },
  link: {
    textDecoration: 'none',
  },
  homePage: {
  },
  myName: {
  },
  ulHomePage: {
    listStyleType: 'none',
  },
};

function App() {
  const [showHomePage, setShowHomePage] = useState(true);

  useEffect(() => {
  }, []);

  const handleNavigate = () => {
    setShowHomePage(false);
  };

  return (
    <Router>
      {showHomePage && (
    <>
    <body style={homePageStyles.body}>
      <div className="myName-Info">
      <h1 className="myName">Hi! I'm Zachary Short</h1>
      <p className="meDesc">I have a passion for UI/UX design, 3D modeling/animation, and video editing</p>
      </div>
        <ul className="ulHomePage" style={homePageStyles.ulHomePage}>
          <li><Link to="/websites" style={homePageStyles.link} onClick={handleNavigate}>Websites I've Built</Link></li>
          <li><Link to="/3d-models" style={homePageStyles.link} onClick={handleNavigate}>3D Models I've Built</Link></li>
          <li><Link to="/videos" style={homePageStyles.link} onClick={handleNavigate}>Videos I've Edited</Link></li>
          <li><Link to="/contact" style={homePageStyles.link} onClick={handleNavigate}>Contact Me</Link></li>
          <li><Link to="/about" style={homePageStyles.link} onClick={handleNavigate}>About Me</Link></li>
        </ul>
    </body>
    </>
    )}
      <Routes>
      <Route path="/test" element={<TestPage />} />
      <Route path="/websites" element={<WebsitesPage />} />
      <Route path="/3d-models" element={<ModelsPage />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
