import React from 'react';
import '../App.css';
import Map from "../assets/images/AboutUs/Map.png";
import Scene1 from "../assets/images/AboutUs/Scene1.png";
import Scene2 from "../assets/images/AboutUs/Scene2.png";
import Scene3 from "../assets/images/AboutUs/Scene3.png";


function AboutUsItem(props) {
	return (
		<>
			<p className='TextBlock-text'>{props.text}</p>
			<img src={props.img} alt='' className='map-image'></img>
		</>
	);
}

export default function AboutUs() {
	return (
		<>
			<p className='TextBlock-text'>Mēs tirgojām visā pasaulē</p>
			<img src={Map} alt='' className='map-image'></img>
			<AboutUsItem img={Scene1} text="Mēs veiksmīgi un dinamiski attīstamies jau vairāk nekā 25 gadus." />
			<AboutUsItem img={Scene2} text="Eliza produkcija ik gadu saņem lielu atzinību starptautiskajās izstādēs, kā arī veiksmīgi eksportē savu produkciju uz Eiropas valstīm." />
			<AboutUsItem img={Scene3} text="Piedāvājam saviem pircējiem iespēju veikt nestandarta pasūtījumus. Šādu pasūtījumu veikšanas termiņš ir 1 - 2 mēneši." />
		</>
	)
}

