import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@mui/material";

const AboutMe = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

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
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
          // markers: true,
        },
      });
    });
  });

  const isXsScreen = useMediaQuery("(max-width:768px)");

  return (
    <div id="about-me" className="reveal-container">
      <div className="pt-48 bg-white relative mt-[-1px] ">
        <div className="!mb-[7.8rem] custom-container">
          <p className="font-tnr opacity-100 !text-[16px] italic">
            What you can expect from me:
          </p>
          <div className="mb-32 fs-4rm mt-8 about-me-title text-reveal">
            {isXsScreen ? (
              <>
                <div className="reveal relative block">
                  I am a versatile professional skilled in
                </div>
                <div className="reveal relative block">
                  software development and creative
                </div>
                <div className="reveal relative block">
                  design. With expertise in TypeScript,
                </div>
                <div className="reveal relative block">
                  JavaScript, React, and Node.js,
                </div>
                <div className="reveal relative block">
                  I specialize in creating efficient,
                </div>
                <div className="reveal relative block">
                  scalable, and user-friendly solutions.
                </div>
                <div className="reveal relative block">
                  Explore my portfolio to see how we
                </div>
                <div className="reveal relative block">
                  can achieve your goals together!
                </div>
              </>
            ) : (
              <>
                <div className="reveal relative block">
                  I am a versatile professional skilled in software development
                </div>
                <div className="reveal relative block">
                  and creative design. With expertise in TypeScript, JavaScript,
                </div>
                <div className="reveal relative block">
                  React, and Node.js, I specialize in creating efficient,
                  scalable,
                </div>
                <div className="reveal relative block">
                  and user-friendly solutions. Explore my portfolio to see how
                  we
                </div>
                <div className="reveal relative block">
                  can achieve your goals together!
                </div>
              </>
            )}
          </div>
          <div id="about-me-services">
            <div className="about-me-services">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div data-aos="fade-up" data-aos-duration="1000" className="">
                    <p
                      className={`mt-0 font-tnr italic mb-[0.5rem] ${
                        isXsScreen ? "!text-[12.8px]" : ""
                      }`}
                    >
                      {" "}
                      All services
                    </p>
                    <ul>
                      <li className="mb-[0.325rem]">
                        <p className="m-0 fw-300">
                          1. Frontend Development: Website, landing page
                        </p>
                      </li>
                      <li className="mb-[0.325rem]">
                        <p className="m-0 fw-300">2. Brand Design</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-8 col-xs-12">
                  <div className="about-me-desc max-width">
                    <p className="m-0 fw-300">
                      With a background in creative design and software
                      development, I bring a wealth of experience from various
                      industries. At iNERD360, I crafted captivating designs for
                      websites, logos, and marketing materials. As a Cluster
                      Creative Designer at Radisson Hotel Group, I developed
                      marketing materials and collaborated with cross-functional
                      teams. Transitioning to software development, I enhanced
                      user experiences as a React.js Developer at BROOI HQ, and
                      now, as a Lead Frontend Engineer at Esca, I design and
                      develop visually appealing web pages, optimize website
                      performance, and maintain brand consistency across all
                      graphic materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
