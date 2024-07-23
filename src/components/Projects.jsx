import React from 'react'
import { styles } from '../styles'
import Project from './Project'
import { projects } from '../constants'
import { motion } from 'framer-motion'
import { duration } from '@mui/material'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 40, },
    visible: { opacity: 1, y: 0,  transition: {duration: 0.6} },
  };

const Projects = () => {
  return (
    <div id='projects' className='bg-white'>
        <div className="project-wrap relative">
            <div className="custom-container pt-[7.8rem] pb-32">
                <div className="row items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="project-title title-mb fs-6rm fw-700">
                            <motion.div variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} className="head-animation">
                                <motion.div variants={itemVariants} className="split-lines">Some of the</motion.div>
                                <motion.div variants={itemVariants} className="split-lines">Projects I have</motion.div>
                                <motion.div variants={itemVariants} className="split-lines">Worked on</motion.div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-8 col-xs-12">
                    <motion.div
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration:2.5, ease:'easeInOut'}}
          viewport={{ once: true }}>
                        <div className="project-desc fw-300 text-justify content-animation">
                            <p className="m-0">These showcased projects offer a glimpse into my skills and experience through tangible real-world examples.</p>
                        </div>
                    </motion.div>
                    </div>
                </div>
            </div>
            <div className={`${styles.paddingX}`}>
      <div className="project-content">
        {projects.map(project => (
        <Project key={project.name} project={project}/>
        ))}
      </div>
    </div>
           
        </div>
    </div>
  )
}

export default Projects