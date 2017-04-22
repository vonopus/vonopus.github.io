import './About.scss'
import '../lib/_text.scss'
import React from 'react'
import opus from '../assets/opus.svg'
import { SignUp } from '../lib'
import '../lib'

const About = () => {
  return (
    <div className='About'>
      <div className='AboutImg'>
        <img src={opus} alt='logo' />
      </div>
      <div className='AboutCopy'>
        <h1>Hallo from Opus</h1>
        <p>Well, Van Opus to be precise, and I'm here to help you share music easily. There's an all-too-common friction found in sharing music you love to people who use a different streaming service. I'm here to solve that problem.</p>
        <SignUp />
      </div>
    </div>
  )
}

About.displayName = 'About'

export default About
