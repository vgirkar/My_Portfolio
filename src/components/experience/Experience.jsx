import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Technical Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {[
              { skill: 'React', level: 'Experienced' },
              { skill: 'Kotlin', level: 'Experienced' },
              { skill: 'Java', level: 'Experienced' },
              { skill: 'Python', level: 'Experienced' },
              { skill: 'TypeScript', level: 'Experienced' },
              { skill: 'JavaScript', level: 'Experienced' },
              { skill: 'HTML', level: 'Experienced' },
              { skill: 'CSS', level: 'Experienced' },
              { skill: 'Next.js', level: 'Intermediate' },
              { skill: 'Semantic UI', level: 'Intermediate' },
              { skill: 'Tailwind CSS', level: 'Intermediate' },
            ].map(({ skill, level }) => (
              <article className='experience__details' key={skill}>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{skill}</h4>
                  <small className='text-light'>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend & Cloud</h3>
          <div className='experience__content'>
            {[
              { skill: 'Go', level: 'Intermediate' },
              { skill: 'Rust', level: 'Intermediate' },
              { skill: 'FastAPI', level: 'Intermediate' },
              { skill: 'Django', level: 'Intermediate' },
              { skill: 'Python', level: 'Intermediate' },
              { skill: 'Node.js', level: 'Experienced' },
              { skill: 'Spring Boot', level: 'Intermediate' },
              { skill: 'AWS', level: 'Intermediate' },
              { skill: 'Azure', level: 'Intermediate' },
              { skill: 'PostgreSQL', level: 'Experienced' },
              { skill: 'MongoDB', level: 'Experienced' },
              { skill: 'GraphQL', level: 'Intermediate' },
            ].map(({ skill, level }) => (
              <article className='experience__details' key={skill}>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{skill}</h4>
                  <small className='text-light'>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <h2 className='section__title'>Work Experience</h2>
      <div className='qualification__container container grid'>
        <div className='experience'>
          <div className='timeline'>
            <div className='timeline__item'>
              <div className='circle__dot'></div>
              <h3 className='timeline__title'>Software Development Engineer</h3>
              <p className='timeline__text'>Amazon, United States</p>
              <span className='timeline__date'>
                Sep 2022 – Sept 2024
              </span>
              <ul>
                <li>Led design and development of new features in Kata DSL, reducing UI component development time by 30%.</li>
                <li>Directed upgrade of TypeScript-to-Kata compiler, reducing integration issues by 40%.</li>
                <li>Implemented robust error recovery framework for JavaScript rendering, reducing customer-facing errors by 90%.</li>
                <li>Collaborated with cross-functional teams, ensuring high scalability and reliability.</li>
                <li>Contributed to AWS infrastructure automation using CDK.</li>
              </ul>
            </div>

            <div className='timeline__item'>
              <div className='circle__dot'></div>
              <h3 className='timeline__title'>Graduate Teaching Assistant</h3>
              <p className='timeline__text'>UNC Charlotte, USA</p>
              <span className='timeline__date'>
                Feb 2021 – Aug 2022
              </span>
              <ul>
                <li>Assisted in teaching Data Structures and Algorithms.</li>
                <li>Orchestrated engaging learning experiences and fostered collaborative environments.</li>
              </ul>
            </div>

            <div className='timeline__item'>
              <div className='circle__dot'></div>
              <h3 className='timeline__title'>Software Engineer Intern</h3>
              <p className='timeline__text'>Suven Consultants, India</p>
              <span className='timeline__date'>
                Aug 2019 – Dec 2019
              </span>
              <ul>
                <li>Improved loan assessment accuracy by integrating custom amortization algorithms.</li>
                <li>Automated CAM reports, reducing credit approval process time by 80%.</li>
                <li>Developed scalable backend solutions to handle large datasets.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
