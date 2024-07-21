import React from 'react'
import { styles } from '../styles'
import Project from './Project'
import { projects } from '../constants'

const Projects = () => {
  return (
    <div id='projects' className='bg-white'>
        <div className="project-wrap relative">
            <div className="custom-container pt-[7.8rem] pb-32">
                <div className="row items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="project-title title-mb fs-6rm fw-700">
                            <div className="head-animation">
                                <div className="split-lines">Some of the</div>
                                <div className="split-lines">Projects I have</div>
                                <div className="split-lines">Worked on</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-8 col-xs-12">
                        <div className="project-desc fw-300 text-justify content-animation">
                            <p className="m-0">These showcased projects offer a glimpse into my skills and experience through tangible real-world examples.</p>
                        </div>
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