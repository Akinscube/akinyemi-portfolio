import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import useScrollAnimation from "../../utils/useScrollFillAnimation";
import { gitHub, gitHubBlack, twitterBlack, twitterBlackIcon, whatsAppBlack, whatsAppGreen } from '../assets';

const Contact = () => {

const { containerRef: containerRef1, bgValue: bgValue1 } =
    useScrollAnimation();
  const { containerRef: containerRef2, bgValue: bgValue2 } =
    useScrollAnimation();

//     gsap.registerPlugin(ScrollTrigger, useGSAP);

//   useGSAP(() => {
//     const texts = gsap.utils.toArray(".reveal");
//     texts.forEach((text) => {
//       gsap.to(text, {
//         backgroundPositionX: "0%",
//         stagger: {
//           amount: 0.5,
//         },
//         scrollTrigger: {
//           trigger: text,
//           start: "top 80%",
//           end: "top 20%",
//           scrub: true,
//         //   markers: true,
//           invalidateOnRefresh: true,
//         },
//       });
//     });
//   });

  return (
    <div id='touch' className='relative bg-white'>
        <div className="touch-wrap">
            <div className="custom-container">
                <p className="touch-sub-title mt-0 italic fw-400 mb-6">
                    That&apos;s all for now
                </p>
                <div className="touch-title text-reveal fs-4rm fw-400">
                    <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue1 }} ref={containerRef1} className="reveal relative"><p className="m-0">Got a project in mind?</p></motion.div>
                        <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue2 }} ref={containerRef2} className="reveal flex relative"><p className="m-0">Let&apos;s talk</p>
                        <div className="akin-btn">
                        <a href="mailto:akinyemi.akinlabi@rocketmail.com">
                      <span className="akin-btn-icon ml-[1.95rem] magnetic" style={{height:'4rem', width:'4rem'}}>
                        <div className="btn-fill"> </div>
                        <div className="btn-text">
                          <div className="btn-text-inner">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.5 4.5V6H16.9425L4.5 18.4425L5.5575 19.5L18 7.0575V16.5H19.5V4.5H7.5Z"
                                fill="#1A1A1A"
                                style={{ fill: "rgb(28, 29, 32)" }}
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </span>
                    </a>
                    </div>
                    </motion.div>
                </div>
                <div className="line my-[5.2rem]"></div>
                <div className="touch-contact fw-300">
                    <ul>
                        <li>
                            <p className="m-0 text-[#4d4d4d]">Email address:</p>
                            <p className="m-0">
                                <a href="mailto:akinyemi.akinlabi@rocketmail.com">akinyemi.akinlabi@rocketmail.com</a>
                            </p>
                        </li>
                        <li>
                            <p className="m-0 text-[#4d4d4d]">Phone number:</p>
                            <p className="m-0">
                                <a href="tel:+2348130341622">(+234) 813 034 1622</a>
                            </p>
                        </li>
                        <li id='social'>
                            <div className="social">
                                <span className="text-[#4d4d4d]">Social:</span>
                                <ul>
                                    <li>
                                        <a target='_blank' href="https://github.com/Akinscube">
                                        <img className='max-h-[27px]' src={gitHubBlack} alt="GitHub" />
                                        </a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://wa.me/8130341622">
                                        <img className='max-h-[27px]' src={whatsAppBlack} alt="WhatsApp" />
                                        </a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://x.com/akins_devs" >
                                        <img className='max-h-[27px]' src={twitterBlackIcon} alt="X" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact