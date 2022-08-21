import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import Pic1 from "../assets/images/miniSlider/pic1.jpg";
import Pic2 from "../assets/images/miniSlider/pic2.jpg";
import Pic3 from "../assets/images/miniSlider/pic3.jpg";

function ProductListItem(props) {
	return (
		<Link to={props.link}>
			<div className='grid-item'>
				<div className='product-list-wrapper'>
					<img className='product-list-img' alt='' loading='lazy' src={props.img}></img>
					<span className="production-list-text">{props.text}</span>
				</div>
			</div>
		</Link>
	);
}

export default function Collection() {
	return (
		<div className='grid-container'>
			<ProductListItem link='/coming-soon' img={Pic2} text="Sophisticated Living" />
			<ProductListItem link='/coming-soon' img={Pic3} text="BBold " />
			<ProductListItem link='/coming-soon' img={Pic1} text="Eliza" />
		</div>
	)
}