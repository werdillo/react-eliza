import React from 'react';
import '../assets/scss/_not-found.scss';
import 'bootstrap/dist/css/bootstrap.css'
import back from '../assets/images/comingSoon/comingSoon.jpeg'
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <div className='not-found'>
      <Helmet>
        <title>Not found</title>
        <meta name="description" content="Eliza-k page not found" />
        <meta name="keywords" content="Eliza-k, not found" />
      </Helmet>
      <img className='-img' rel='' alt='' src={back} />
      <span className='-text'>Page not found</span>
    </div>
  )
}
