import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Resume from './Resume';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Experiences from './Experiences';
import Skills from './Skills';
import GardeningGallery from './GardeningGallery';
import CrochetGallery from './CrochetGallery';
import CookeryGallery from './CookeryGallery';
import { navPaths } from '../data/defs';


function App() {
  return (
    <Router>
      <div id="app-container" class="light_background">
        <Header />
        <main>
          <Routes>
            <Route path={navPaths.NAVIGATE_TO_HOME} element={<Home />} />
            <Route path={navPaths.NAVIGATE_TO_RESUME} element={<Resume />} />
            <Route path={navPaths.NAVIGATE_TO_ABOUT_ME} element={<AboutMe />} />
            <Route path={navPaths.NAVIGATE_TO_CONTACT_ME} element={<ContactMe />} />
            <Route path={navPaths.NAVIGATE_TO_EXPERIENCES} element={<Experiences />} />
            <Route path={navPaths.NAVIGATE_TO_SKILLS} element={<Skills />} />
            <Route path={navPaths.NAVIGATE_TO_GARDENING} element={<GardeningGallery />} />
            <Route path={navPaths.NAVIGATE_TO_CROCHET} element={<CrochetGallery />} />
            <Route path={navPaths.NAVIGATE_TO_COOKERY} element={<CookeryGallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
