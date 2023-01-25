import React from 'react';
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next';

import '../assets/scss/_about-us.scss';
import Scene1 from "../assets/images/AboutUs/Scene1.png";
import Scene2 from "../assets/images/AboutUs/Scene2.png";
import Scene3 from "../assets/images/AboutUs/Scene3.png";


export default function AboutUs() {
	const { t } = useTranslation();
	return (
		<div className='about-us'>
			<div className='-player'>
				<div className='-item'>
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
			<img src={Scene1} alt='' className='-image' />

			<p className='-text'>{t("Pages.about-us.scene1-text")}</p>
			<img src={Scene2} alt='' className='-image' />

			<p className='-text'>{t("Pages.about-us.scene2-text")}</p>
			<img src={Scene3} alt='' className='-image' />
		</div>
	)
}

