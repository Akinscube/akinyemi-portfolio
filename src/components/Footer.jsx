import React from 'react'
import { styles } from '../styles'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 3000,
            smooth: true
          });
      };

  return (
    <div id='footer'>
        <div className="footer-wrap">
            <div className={`${styles.paddingX} `}>
                <div className="row d-block d-xl-none text-center">
                    <p className=" text-white footer-top text-center">
                    <a className='cursor-pointer' onClick={scrollToTop}>[Back to top ↑]</a>
                    </p>
                </div>
                <div className="footer-title text-center mb-[1.3rem]">
                    <img className='w-full' src="https://res.cloudinary.com/do7ow1whq/image/upload/v1721385902/akinsdev_new2_jdhr88.svg" alt="" />
                </div>
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 d-none d-xl-block text-white">
                        <p className="m-0">Versatile software developer and designer passionate about minimalistic, user-friendly solutions.</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 d-none d-xl-block">
                        <p className="text-[1.2rem] fw-400 text-white text-right">
                            <a className='cursor-pointer' onClick={scrollToTop}>[Back to top ↑]</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer