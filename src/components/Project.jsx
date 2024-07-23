import React from "react";
import { styles } from "../styles";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  return (
    <>
      <div className="project-item">
        <div className="_project-item">
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block">
                <div className="project-item-wrap">
                  <motion.div initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration:2.5, ease:'easeInOut'}}
          viewport={{ once: true }} className="relative">
                    <div className="project-name fs-4rm">{project.name}</div>
                    <div className="project-description">
                      <p className="m-0">{project.description}</p>
                    </div>
                    <div className="project-sub">
                      <ul>
                        <li>
                          <span className="font-tnr italic">Category:</span>
                          <span className="fw-300">{project.category}</span>
                        </li>
                        <li>
                          <span className="font-tnr italic">Role:</span>
                          <span className="fw-300">{project.role}</span>
                        </li>
                        <li>
                          <span className="font-tnr italic">Tech:</span>
                          {project.tech.map((tech) => (
                            <span key={tech} className="fw-300">
                              {tech},&nbsp;
                            </span>
                          ))}
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                  <motion.div initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration:2.5, ease:'easeInOut'}}
          viewport={{ once: true }} className="project-btn fs-4rm akin-btn">
                    <span className="fw-400 ">Visit site</span>
                    <a target="_blank" href={project.liveUrl}>
                      <span className="akin-btn-icon ml-[1.95rem] magnetic">
                        <div className="btn-fill"> </div>
                        <div className="btn-text">
                          <div className="btn-text-inner">
                            <svg
                              width="24"
                              height="24"
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
                  </motion.div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="project-img-wrap">
                  <div
                    className="project-bg"
                    data-scroll
                    data-scroll-speed="0.1"
                    style={{
                      backgroundImage: `url(${project.imageUrl})`,
                    }}
                  ></div>
                  <div
                    className="project-img"
                    style={{
                      background: `linear-gradient(213deg, ${project.backgroundColors[0]}, ${project.backgroundColors[1]})`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 d-block d-lg-none">
                <div className="project-text">
                  <div className="project-name">{project.name}</div>
                  <div className="project-description">
                    <p className="m-0">{project.description}</p>
                  </div>
                  <div className="project-sub">
                    <ul>
                      <li>
                        <span className="font-tnr italic">Category:</span>
                        <span className="fw-300">{project.category}</span>
                      </li>
                      <li>
                        <span className="font-tnr italic">Role:</span>
                        <span className="fw-300">{project.role}</span>
                      </li>
                      <li>
                        <span className="font-tnr italic">Tag:</span>
                        {project.tech.map((tech) => (
                            <span key={tech} className="fw-300">
                              {tech},&nbsp;
                            </span>
                          ))}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="project-btn fs-4rm akin-btn">
                    <span className="fw-400 ">Visit site</span>
                    <a target="_blank" href={project.liveUrl}>
                      <span className="akin-btn-icon ml-[1.95rem] magnetic">
                        <div className="btn-fill"> </div>
                        <div className="btn-text">
                          <div className="btn-text-inner">
                            <svg
                              width="24"
                              height="24"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
