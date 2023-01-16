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
					<img className='product-list-img' alt='' src={props.img}></img>
					<span className="production-list-text">{props.text}</span>
				</div>
			</div>
		</Link>
	);
}

export default function Collection() {
	return (
		<div className='grid-container'>
			{/* <ProductListItem link='/collection/sophisticated-living/' img={Pic2} text="Sophisticated Living" /> */}
			<a href="https://www.sophisticated-living.com/" rel="noopener noreferrer" target="_blank">
				<div className='grid-item'>
					<div className='product-list-wrapper'>
						<img className='product-list-img' alt='' src={Pic2}></img>
						<span className="production-list-text">Sophisticated Living</span>
					</div>
				</div>
			</a>
			<ProductListItem link='/collection/bbold' img={Pic3} text="BBold " />
			<ProductListItem link='/collection/basic' img={Pic1} text="Basic" />
		</div>
	)
}