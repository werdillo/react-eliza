import React from 'react';
import ReactPlayer from 'react-player'

import '../App.css';
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
			<div className='player-wrap'>
				<div className='react-player-item'>
					<ReactPlayer
						className='react-player'
						url='video/demo_video.MOV'
						width="100%"
						height="auto"
						controls={true}
						playing={true}
					/>
				</div>
			</div>
			<img src={Scene1} alt='' className='map-image'></img>
			<AboutUsItem img={Scene2} text="Eliza produkcija ik gadu saņem lielu atzinību starptautiskajās izstādēs, kā arī veiksmīgi eksportē savu produkciju uz Eiropas valstīm." />
			<AboutUsItem img={Scene3} text="Piedāvājam saviem pircējiem iespēju veikt nestandarta pasūtījumus. Šādu pasūtījumu veikšanas termiņš ir 1 - 2 mēneši." />
		</>
	)
}

