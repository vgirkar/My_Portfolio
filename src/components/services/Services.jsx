import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='service'>
      <h5>My Education</h5>
      <h2>Education</h2>

      <div className="container services__container">
        {/* Master’s Degree */}
        <article className='service'>
          <div className="service__head">
            <h3>Master of Science in Computer Science</h3>
          </div>
          <ul className='service__list'>
            <li>
              <p>University of North Carolina at Charlotte (2021-2022)</p>
            </li>
          </ul>
        </article>

        {/* Bachelor’s Degree */}
        <article className='service'>
          <div className="service__head">
            <h3>Bachelor of Engineering in Information Technology</h3>
          </div>
          <ul className='service__list'>
            <li>
              <p>University of Mumbai (2015-2019)</p>
            </li>
          </ul>
        </article>

        {/* Optional: Add School if you like */}
        <article className='service'>
          <div className="service__head">
            <h3>Higher Secondary Education</h3>
          </div>
          <ul className='service__list'>
            <li>
              <p>Khalsa College (2013 - 2015)</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
