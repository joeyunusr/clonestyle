/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Testimonials from './components/Testimonials';
import SecurityLayer from './components/SecurityLayer';
import PasswordOverlay from './components/PasswordOverlay';

import StyleClone from './pages/StyleClone';
import CarouselStudio from './pages/CarouselStudio';
import BannerStudio from './pages/BannerStudio';

function Home() {
  return (
    <>
      <Hero />
      <Works />
      <About />
      <Testimonials />
    </>
  );
}

export default function App() {
  return (
    <SecurityLayer>
      <PasswordOverlay>
        <Router>
          <div className="bg-[#f6f6f6] min-h-screen text-[#2b2b2b] font-sans selection:bg-blue-200">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/style-clone" element={<StyleClone />} />
                <Route path="/carousel-studio" element={<CarouselStudio />} />
                <Route path="/banner-studio" element={<BannerStudio />} />
              </Routes>
            </main>
          </div>
        </Router>
      </PasswordOverlay>
    </SecurityLayer>
  );
}
