import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import TestPage from './TestPage';
import WebsitesPage from './WebsitesPage';
import ModelsPage from './ModelsPage';
import VideosPage from './VideosPage';
import ContactPage from './ContactPage.js';
import AboutPage from './AboutPage';

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
    <div className="homePage">
      <div className="myName-Info">
      <h1 className="myName">Hi! I'm Zachary Short</h1>
      <p>I have a passion for UI/UX design, 3D modeling/animation, and video editing</p>
      </div>
      <div className="ulContainerHomePage">
        <ul className="ulHomePage">
          <li><Link to="/websites" onClick={handleNavigate}>Websites I've Built</Link></li>
          <li><Link to="/3d-models" onClick={handleNavigate}>3D Models I've Built</Link></li>
          <li><Link to="/videos" onClick={handleNavigate}>Videos I've Edited</Link></li>
          <li><Link to="/contact" onClick={handleNavigate}>Contact Me</Link></li>
          <li><Link to="/about" onClick={handleNavigate}>About Me</Link></li>
          
        </ul>
      </div>
    </div>
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
