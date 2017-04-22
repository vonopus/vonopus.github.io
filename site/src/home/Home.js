import './Home.scss'
import '../lib/_text.scss'
import React from 'react'
import opus from '../assets/opus.svg'
import '../lib'
import TextCarousel from 'react-text-carousel'

const Home = () => {
  const phrases = ['discovering', 'listening', 'sharing']
  const interval = 100
  const typistProps = {
    avgTypingDelay: 50,
    cursor: {
      hideWhenDone: true,
      hideWhenDoneDelay: 3000,
      blink: true
    },
    stdTypingDelay: 40
  }
  return (
    <div className='Home'>
      <img src={opus} alt='logo' />
      <h1>Meet Von Opus</h1>
      <div className='Typing'>
        <p>Your music&nbsp;</p>
        <TextCarousel phrases={phrases} interval={interval} typistProps={typistProps} />
        <p>&nbsp;assistant</p>
      </div>
    </div>
  )
}

Home.displayName = 'Home'

export default Home
