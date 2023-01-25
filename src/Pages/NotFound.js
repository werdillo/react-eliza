import React from 'react';
import '../assets/scss/_not-found.scss';
import 'bootstrap/dist/css/bootstrap.css'
import back from '../assets/images/comingSoon/comingSoon.jpeg'

export default function NotFound() {
  return (
    <div className='not-found'>
      <img className='-img' rel='' alt='' src={back} />
      <span className='-text'>Page not found</span>
    </div>
  )
}
