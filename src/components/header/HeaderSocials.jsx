import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si' 
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href ="https://www.linkedin.com/in/vgirkar/" target='blank'><BsLinkedin/></a>
        <a href ="https://github.com/vgirkar" target='blank'><BsGithub/></a>
        <a href ="https://www.instagram.com/vinitgirkar01/" target='blank'><FiInstagram/></a>
        <a href ="https://twitter.com/vgirkar18" target='blank'><IoLogoTwitter/></a>
    </div>
  )
}

export default HeaderSocials
