import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from "gsap/all";
import Hero from './components/Hero';
import LocomotiveScroll from 'locomotive-scroll';
import Topbar from './components/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';






const App = () => {

  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    },
});


  const appRef = useRef()

  useGSAP(() => {

    gsap.to('.loader', {
      opacity: 0,
      display: 'none',
      duration: 0.25,
      delay: 3.5
    });

    gsap.to('.loader', {
      scale: 0.9,
      duration: 0.9,
      delay: 2.5,
      ease: 'back.inOut'
    });

    gsap.to('.overlay-block', {
      duration: 1.5,
      delay: 3,
      display: 'none',
      height: 0,
      ease: 'power4.inOut'
    })

    gsap.to('.overlay', {
      duration: 1.5,
      display: 'none',
      delay: 3.5,
    })

    gsap.to('.bar', {
      duration: 1.5,
      opacity: 0.5,
      background: '#fff',
      display: 'none',
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: 'elastic.inOut'
    })

    // gsap.from('.hero', {
    //   duration: 2,
    //   delay: 4.5,
    //   y: 400,
    //   ease: 'power4.inOut'
    // })


  }, {scope: appRef})


  return (
    <div className="App" ref={appRef}>
      <div className="loader w-full">
        <div className="loader-gradient" />
        <img className="loader-text" src='https://res.cloudinary.com/do7ow1whq/image/upload/v1721385902/akinsdev_new2_jdhr88.svg' />
      </div>
      <div className="overlay w-full">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="bar"></div>
        ))}
      </div>
        <div className="overlay-block w-full" />
        <Topbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
};

export default App;
