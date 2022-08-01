import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
// images
import Hotel from "../assets/images/productList/Horeca.png";
import Production from "../assets/images/productList/Production.png";
import Collection from "../assets/images/productList/Collection.png";
import Mattresses from "../assets/images/productList/Mattresses.png";

import Pic1 from "../assets/images/miniSlider/pic1.jpg";
import Pic2 from "../assets/images/miniSlider/pic2.jpg";
import Pic3 from "../assets/images/miniSlider/pic3.jpg";

function ProductListItem(props) {
	return (
		<Link to={props.link}>
			<div className='grid-item'>
				<div className='production-list-wrapper'>
					<img className='product-list-img' alt='' src={props.img}></img>
					<div className="production-list-text">{props.text}</div>
				</div>
			</div>
		</Link>
	);
}

export default function ProductList () {
	return (
		<div className='grid-container'>
			<ProductListItem link='/Catalogs' img={Pic1} text="Eliza"/>
			<ProductListItem link='/Production' img={Pic2} text="Sophisticated Living"/>
			<ProductListItem link='/Horeca' img={Pic3} text="Bebold"/>
			{/* <ProductListItem link='/Components' img={Mattresses} text="Komponenti"/> */}
		</div>
	)
}