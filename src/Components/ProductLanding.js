import React from 'react';
import '../assets/scss/_product-landing.scss';

export default function ProductLanding(props) {
	return (
		<div className='product-landing'>
			<img src={props.img} alt='' className='-img'></img>
			<p className='-text'>{props.text.toUpperCase()}</p>
		</div>
	)
}