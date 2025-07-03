import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Nvabar from './components/Nvabar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturePeoject from './components/FeaturePeoject'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Services from './components/Services'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import LocomotiveScroll from 'locomotive-scroll';

const HomePage = () => {
  return (
    <>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <FeaturePeoject/>
      <Cards/>
    </>
  );
};

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <Router>
      <ScrollToTop />
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
        <Nvabar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/insights" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
