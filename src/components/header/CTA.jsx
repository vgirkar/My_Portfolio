import React from 'react'
import CV from '../../assets/cvv.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://docs.google.com/document/d/1MQG9O8r1h4uYTmLFSad5gOOQgxTKd9jmc_kIaXaGmfI/edit?tab=t.0" target='_blank' download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
      
    </div>
  )
}

export default CTA
