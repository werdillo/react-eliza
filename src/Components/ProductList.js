import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
// images
import Hotel from "../assets/images/productList/Horeca.png";
import Production from "../assets/images/productList/Production.png";
import Collection from "../assets/images/productList/Collection.png";
import Mattresses from "../assets/images/productList/Mattresses.png";

function ProductListItem(props) {
	return (
		<Link to={props.link}>
			<div className='grid-item'>
				<div className='production-list-wrapper'>
					<img className='product-list-img' alt='' src={props.img}></img>
					<div class="production-list-text">{props.text}</div>
				</div>
			</div>
		</Link>
	);
}

export default function ProductList () {
	return (
		<>
			<div className='grid-container'>
				<ProductListItem link='/collection' img={Collection} text="Kolekcijas"/>
				<ProductListItem link='/Production' img={Production} text="Produkcija"/>
				<ProductListItem link='/Horeca' img={Hotel} text="Horeca"/>
				<ProductListItem link='/Components' img={Mattresses} text="Komponenti"/>
			</div>
		</>
	)
}