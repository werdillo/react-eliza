import React from 'react';
import '../App.css';

export default function ProductLanding(props) {
	return (
		<div className='product-wrapper'>
			<img src={props.img} alt='' className='product-image'></img>
			<p className='product-main-text'>{props.text.toUpperCase()}</p>
		</div>
	)
}