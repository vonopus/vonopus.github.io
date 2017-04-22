import './signUp.scss'
import React from 'react'
// import { NavLink } from 'react-router-dom'

// const mcForm = {
//   position: absolute,
//   left: 5000,
// }

const SignUp = () => {
  return (
    <div className='SignUp'>
      {/* Begin MailChimp Signup Form */}
      <div className='mc_embed_signup'>
        <form action='//nicer.us14.list-manage.com/subscribe/post?u=018134740cf42b7d8889b8b3b&amp;id=fffff31933' method='post' className='mc-embedded-subscribe-form validate' name='mc-embedded-subscribe-form' target='_blank' noValidate>
          <div id='mc_embed_signup_scroll'>
            <input type='email' value='' name='EMAIL' className='email' id='mce-EMAIL' placeholder='email address' required />
            <div className='clear'>
              <input type='submit' value='Get Notified' name='subscribe' id='mc-embedded-subscribe' className='button' />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

SignUp.displayName = 'SignUp'

export default SignUp
