import React from "react";
import { styles } from "../styles";
import Marquee from "react-fast-marquee";

const Hero = () => {

    const marqueeItems = ['ReactJs', 'NextJs', 'RESTful API', 'Redux', 'Tailwind', 'Git', 'JavaScript', 'Framer motion', 'ThreeJs', 'JavaScript', 'SASS', 'CSS', 'HTML', 'Brand Design']

  return (
    <div className={`hero`}>
      <div className="hero-content">
        <div className={`${styles.paddingX}`}>
          <div className="flex justify-between items-end">
            <div className="hero-title">
              Frontend <br /> Engineer
            </div>
            <div className="hero-desc text-white d-none d-xl-block">
              <div>
                <a className="hover:underline" href="mailto:akinyemi.akinlabi@rocketmail.com">
                  Akinyemi.akinlabi@rocketmail.com
                </a>
              </div>
              <div>
                <a className="hover:underline" href="tel:+2348130341622">(+234)8130341622</a>
              </div>
              <div className="social-list">
                <a className="hover:underline relative inline-block" href="http://">
                  <span className="hover-animation-word">GitHub</span>
                </a>
              </div>
              <div className="social-list">
                <a className="hover:underline relative inline-block" href="http://">
                  <span className="hover-animation-word">WhatsApp</span>
                </a>
              </div>
              <div className="social-list">
                <a className="hover:underline relative inline-block" href="http://">
                  <span className="hover-animation-word">X</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="hero-marquee" className="">
        <div className="hero-marquee">
          <div className="hero-marquee-inner text-[#fff]">
            <Marquee pauseOnHover={true} speed={90} >
                <ul className="marquee-container">
            {marqueeItems.map((item, index) => (
                <React.Fragment key={index}>
        <li className="marquee-item" key={index}>{item}</li>
        <div className="marquee-divider" />

        </React.Fragment>
      ))}</ul>
              
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
