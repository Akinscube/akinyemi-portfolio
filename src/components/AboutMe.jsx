import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import useScrollAnimation from "../../utils/useScrollFillAnimation";

const AboutMe = () => {
  const { containerRef: containerRef1, bgValue: bgValue1 } =
    useScrollAnimation();
  const { containerRef: containerRef2, bgValue: bgValue2 } =
    useScrollAnimation();
  const { containerRef: containerRef3, bgValue: bgValue3 } =
    useScrollAnimation();
  const { containerRef: containerRef4, bgValue: bgValue4 } =
    useScrollAnimation();
  const { containerRef: containerRef5, bgValue: bgValue5 } =
    useScrollAnimation();
  const { containerRef: containerRef6, bgValue: bgValue6 } =
    useScrollAnimation();
  const { containerRef: containerRef7, bgValue: bgValue7 } =
    useScrollAnimation();
  const { containerRef: containerRef8, bgValue: bgValue8 } =
    useScrollAnimation();


  // gsap.registerPlugin(useGSAP, ScrollTrigger);

  // useGSAP(() => {
  //   const texts = gsap.utils.toArray(".am-reveal");
  //   texts.forEach((text) => {
  //     gsap.to(text, {
  //       backgroundPositionX: "0%",
  //       stagger: {
  //         amount: 0.5,
  //       },
  //       scrollTrigger: {
  //         trigger: text,
  //         start: "top 80%",
  //         end: "top 20%",
  //         scrub: true,
  //         // markers: true,
  //         invalidateOnRefresh: true,
  //       },
  //     });
  //   });
  // });

  const isXsScreen = useMediaQuery("(max-width:768px)");

  return (
    <div id="about-me" className="reveal-container">
      <div className="pt-40 bg-white relative mt-[-1px] ">
        <div className="!mb-[7.8rem] custom-container">
          <motion.div
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration:2, ease:'easeInOut'}}
          viewport={{ once: true }}
          >
          <p className="font-tnr opacity-100 !text-[18px] italic">
            About me:
          </p>
          <div className="mb-32 fs-4rm mt-8 about-me-title am-text text-reveal">
            {isXsScreen ? (
              <>
                <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue1 }} ref={containerRef1} className="am-reveal reveal relative block">
                I'm a skilled professional in software
                </motion.div>
                <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue2 }} ref={containerRef2} className="am-reveal reveal relative block">
                development and creative design,
                </motion.div>
                <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue3 }} ref={containerRef3} className="am-reveal reveal relative block">
                specializing in efficient, scalable, and
                </motion.div>
                <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue4 }} ref={containerRef4} className="am-reveal reveal relative block">
                user-friendly solutions using
                </motion.div>
                <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue5 }} ref={containerRef5} className="am-reveal reveal relative block">
                TypeScript, JavaScript, and React.
                </motion.div>
                <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue6 }} ref={containerRef6} className="am-reveal reveal relative block">
                Check out my portfolio to see how we
                </motion.div>
                <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue7 }} ref={containerRef7} className="am-reveal reveal relative block">
                can achieve your goals together!
                </motion.div>
              </>
            ) : (
              <>
                <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue1 }} ref={containerRef1} className="am-reveal reveal relative block">
                I'm a skilled professional in software development and creative
                </motion.div>
                <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue2 }} ref={containerRef2} className="am-reveal reveal relative block">
                design, specializing in efficient, scalable, and user-friendly
                </motion.div>
                <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue3 }} ref={containerRef3} className="am-reveal reveal relative block">
                solutions using TypeScript, JavaScript, and React. Check out
                </motion.div>
                <motion.div style={{ backgroundSize: "200% 100%", backgroundPositionX: bgValue4 }} ref={containerRef4} className="am-reveal reveal relative block">
                my portfolio to see how we can achieve your goals together!
                </motion.div>
              </>
            )}
          </div>
          </motion.div>
          <div id="about-me-services">
            <motion.div
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration:2.5, ease:'easeInOut'}}
          viewport={{ once: true }}>
            <div className="about-me-services">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div data-aos="fade-up" data-aos-duration="1000" className="">
                    <p
                      className={`mt-0 font-tnr italic mb-[0.5rem] ${
                        isXsScreen ? "!text-[16px]" : " flex justify-end"
                      }`}
                    >
                      {" "}
                      Background:  
                    </p>
                    {/* <ul>
                      <li className="mb-[0.325rem]">
                        <p className="m-0 fw-300">
                          1. Frontend Development: Website, landing page
                        </p>
                      </li>
                      <li className="mb-[0.325rem]">
                        <p className="m-0 fw-300">2. Brand Design</p>
                      </li>
                    </ul> */}
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
