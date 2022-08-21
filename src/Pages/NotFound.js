import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import back from '../assets/images/comingSoon/comingSoon.jpeg'


export default function NotFound() {
  return (
    <div className='coming-soon-wrapper'>
      <img className='coming-soon-picture' rel='' src={back} />
      <span className='coming-soon-text'>Page not found</span>
    </div>
  )
}
