import React from 'react'
import './about.css'
import ME from '../../assets/about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <img src={ME} className='about__me-image' alt="About Image"/>
        </div>
        <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Support</h5>
            <small>Remote/On-Site</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>15+ Projects</small>
          </article>
        </div>
        <p>
        I'm <strong>Vinit Vilas Girkar</strong>, a Software Development Engineer with a Master’s in Computer Science from the University of North Carolina at Charlotte. I have a proven track record at Amazon and Suven Consultants, delivering scalable, high-performance backend and frontend systems. Skilled in technologies like React, TypeScript, Go, Rust, and cloud platforms such as AWS and Azure. I thrive in fast-paced environments, collaborating across teams to translate UX designs into reliable, reusable modules. My approach emphasizes operational excellence, test-driven development, and strategic planning. I'm always eager to tackle complex challenges and bring innovative solutions to life.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>

      


    </section>
  )
}

export default About
