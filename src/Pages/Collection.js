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
				<div className='production-list-wrapper'>
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
			<ProductListItem link='/collection/eliza' img={Pic1} text="Eliza" />
			<ProductListItem link='/collection/sophisticated-living' img={Pic2} text="Sophisticated Living" />
			<ProductListItem link='/collection/bebold' img={Pic3} text="Bebold" />
			{/* <ProductListItem link='/Components' img={Mattresses} text="Komponenti"/> */}
		</div>
	)
}