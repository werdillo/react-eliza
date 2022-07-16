import React from 'react';
import awards from "../assets/images/awards.png";

export default function Awards() {
 	return (
		<>
			<p className='awards-title'>Mūsu balvas</p>
			  <img src={awards} alt='' className='awards-image'></img>
			<p className='awards-text'>“Eliza” mēbeļu modeļi jau vairākus gadus tiek nominēti prēmijai “German Design Award” un “Interior Innovation Award” Vācijā. 2015. gadā modelis “Solid Wave” bija vinnējis nominācijā «Interior Innovation Award 2015». Tas liecina, ka kompānijas “Eliza” produkcija ir stilīga, ekskluzīva un neatkārtojama.</p>
		</>
	);
}