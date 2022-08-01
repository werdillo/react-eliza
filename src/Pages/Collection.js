import React from 'react';
import '../App.css';
import Map from "../Components/Map";
import ProductList from "../Components/ProductList";
import TextBlock from "../Components/TextBlock";
import MiniSlider from "../Components/MiniSlider";
import Pic1 from "../assets/images/miniSlider/pic1.jpg";
import Pic2 from "../assets/images/miniSlider/pic2.jpg";
import Pic3 from "../assets/images/miniSlider/pic3.jpg";

export default function Collection() {
	return (
		<ProductList />
		// <div className='collection-wrapper'>
		// 	<img src={Pic1} alt='' className='collection-choose-brand'></img>
		// 	<img src={Pic2} alt='' className='collection-choose-brand'></img>
		// 	<img src={Pic3} alt='' className='collection-choose-brand'></img>
		// </div>
	)
}