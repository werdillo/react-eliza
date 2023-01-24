import React from 'react';
import '../assets/scss/_not-found.css';
import 'bootstrap/dist/css/bootstrap.css'
import back from '../assets/images/comingSoon/comingSoon.jpeg'

export default function NotFound() {
  return (
    <div className='coming-soon-wrapper'>
      <img className='coming-soon-picture' rel='' alt='' src={back} />
      <span className='coming-soon-text'>Page not found</span>
    </div>
  )
}
