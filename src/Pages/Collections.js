import React from 'react';
import { Helmet } from "react-helmet";
import '../assets/scss/_collections.scss';
import { Link } from "react-router-dom";
import Pic1 from "../assets/images/miniSlider/pic1.jpg";
import Pic2 from "../assets/images/miniSlider/pic2.jpg";
import Pic3 from "../assets/images/miniSlider/pic3.jpg";

export default function Collections() {
	return (
		<div className='collections'>
			<Helmet>
				<title>Collections</title>
				<meta name="description" content="Eliza collections" />
			</Helmet>
			<a href="https://www.sophisticated-living.com/" rel="noopener noreferrer" target="_blank">
				<div className='-item'>
					<img className='-img' alt='' src={Pic2}></img>
					<span className="-text">Sophisticated Living</span>
				</div>
			</a>
			<Link to='/collection/bbold'>
				<div className='-item'>
					<img className='-img' alt='' src={Pic3}></img>
					<span className="-text">BBold</span>
				</div>
			</Link>
			<Link to='/collection/basic'>
				<div className='-item'>
					<img className='-img' alt='' src={Pic1}></img>
					<span className="-text">Basic</span>
				</div>
			</Link>
		</div>
	)
}