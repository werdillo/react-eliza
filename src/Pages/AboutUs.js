import React from 'react';
import '../App.css';
import Scene1 from "../assets/images/AboutUs/Scene1.png";
import Scene2 from "../assets/images/AboutUs/Scene2.png";
import Scene3 from "../assets/images/AboutUs/Scene3.png";

import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

function AboutUsItem(props) {
	return (
		<>
			<p className='TextBlock-text'>{props.text}</p>
			<img src={props.img} alt='' className='map-image lazyload'></img>
		</>
	);
}

export default function AboutUs() {
	return (
		<>
			<img src={Scene1} alt='' className='map-image lazyload'></img>
			<AboutUsItem img={Scene2} text="Eliza produkcija ik gadu saņem lielu atzinību starptautiskajās izstādēs, kā arī veiksmīgi eksportē savu produkciju uz Eiropas valstīm." />
			<AboutUsItem img={Scene3} text="Piedāvājam saviem pircējiem iespēju veikt nestandarta pasūtījumus. Šādu pasūtījumu veikšanas termiņš ir 1 - 2 mēneši." />
		</>
	)
}

