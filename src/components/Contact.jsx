import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Contact = () => {

    gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    const texts = gsap.utils.toArray(".reveal");
    texts.forEach((text) => {
      gsap.to(text, {
        backgroundPositionX: "0%",
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        //   markers: true,
          invalidateOnRefresh: true,
        },
      });
    });
  });

  return (
    <div id='touch' className='relative bg-white'>
        <div className="touch-wrap">
            <div className="custom-container">
                <p className="touch-sub-title mt-0 italic fw-400 mb-6">
                    That&apos;s all for now
                </p>
                <div className="touch-title text-reveal fs-4rm fw-400">
                    <div className="reveal relative"><p className="m-0">Got a project in mind?</p></div>
                    <div className="reveal relative"><p className="m-0">Let&apos;s talk</p></div>
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
                                        <a target='_blank' href="https://github.com/Akinscube">GitHub</a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://wa.me/8130341622">WhatsApp</a>
                                    </li>
                                    <li>
                                        <a target='_blank' href="https://x.com/akins_devs">X</a>
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