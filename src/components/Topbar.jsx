import React, { useState } from "react";
import { styles } from "../styles";


const Topbar = () => {

    const [mobileActive, setMobileActive] = useState(false)

  const now = new Date();

  // Create an Intl.DateTimeFormat object with the GMT+1 time zone
  const options = {
    timeZone: "Africa/Lagos", // GMT+1 time zone (Central European Time)
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Use 24-hour format
  };

  const formatter = new Intl.DateTimeFormat("en-GB", options);
  const formattedTime = formatter.format(now);

  return (
    <>
    <div className="topbar mt-[2rem]">
      <div className={`${styles.paddingX} `}>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 col-4 flex items-center">
            <div className="logo sm:pr-8">
              <a href="#">
                <img
                  className="max-w-full h-auto"
                  src="https://res.cloudinary.com/do7ow1whq/image/upload/v1721385902/akinsdev_new2_jdhr88.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 col-12 d-none d-xl-block">
            <div className="row">
              <div className="col-xl-6 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div className="font-tnr italic">Sitemap:</div>
                <div className="">
                  <a href="#about-me" className="hover:underline">
                    About me,
                  </a>
                  <a href="#projects" className="hover:underline ml-[0.5rem]">
                    Projects
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <div id="topbar-right" className="">
                  <div className="">
                    <div className="flex justify-between">
                      <div className="topbar-item">
                        <div className="font-tnr italic">Status:</div>
                        <div className="desc">
                          <p className="m-0">
                            Available for freelance projects
                          </p>
                        </div>
                      </div>
                      <div className="topbar-item">
                        <div className="font-tnr italic">Location:</div>
                        <div className="desc">
                          <p className="m-0">
                            Local time <span>{formattedTime}</span>, GMT (+1:00)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 d-none d-md-block d-sm-block d-xl-none">
            <div className="topbar-item text-right">
              <div className="font-tnr italic d-none d-xl-block">Sitemap:</div>
              <div className="desc">
                <a href="#about-me" className="hover:underline">
                  About me,
                </a>
                <a href="#projects" className="hover:underline ml-[0.5rem]">
                  Projects
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 col-8 d-block d-sm-none px-[15px] text-right">
            <div onClick={() => setMobileActive(!mobileActive)} className={`hamburger ${mobileActive ? 'active' : ''}`}>
              <span className="hamburger-btn"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="menu-mb ">
        <div className={`menu-mb-wrap ${mobileActive ? 'active' : ''}`}>
            <div className={`menu-mb-main ${mobileActive ? 'active' : ''}`}>
                <p className="font-tnr italic text-[12.8px] mt-0 mb-2">Sitemap:</p>
                <ul>
                    <li className=""><a href="#about-me" className="menu-mb-item">About me</a></li>
                    <li className=""><a href="#projects" className="menu-mb-item">Projects</a></li>
                </ul>
            </div>
            <div id="menu-mb-bottom" className="">
                <div className="menu-mb-bottom active">
                    <ul>
                        <li>
                            <a target="_blank" href="https://github.com/Akinscube">GitHub</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://wa.me/8130341622">WhatsApp</a>
                        </li>
                        <li>
                        <a target='_blank' href="https://x.com/akins_devs">X</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Topbar;
