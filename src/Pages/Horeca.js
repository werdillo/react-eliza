import React from 'react';
import '../assets/scss/_horeca.scss';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from "react-helmet";
import 'react-lazy-load-image-component/src/effects/blur.css';

import hotel from "../assets/images/hoReCa/Ho.png";
import Cafe from "../assets/images/hoReCa/Ca.png";
import restaraunt from "../assets/images/hoReCa/Re.png";

function HorecaItem(props) {
	return (
		<div className='horeca'>
			<Helmet>
				<title>Horeca</title>
				<meta name="description" content="Eliza-k horeca" />
				<meta name="keywords" content="Eliza-k, eliza, horeca, hotels, restaurants, cafe" />
			</Helmet>
			<LazyLoadImage className='-img' rel='' alt='' src={props.img} />
			<div className='-block'>
				<div className='-text xl'>{props.header}</div>
				<div className='-text'>{props.text}</div>
			</div>
		</div>
	)
}

export default function Horeca() {
	const { t } = useTranslation();
	return (
		<>
			<Helmet>
				<title>gallery</title>
				{/* <meta name="description" content="Home page" /> */}
			</Helmet>
			<HorecaItem header={t("Pages.horeca.hotel-title")} img={hotel} text={t("Pages.horeca.hotel-text")} />
			<HorecaItem header={t("Pages.horeca.restaurant-title")} img={restaraunt} text={t("Pages.horeca.restaurant-text")} />			
			<HorecaItem header={t("Pages.horeca.cafe-title")} img={Cafe} text={t("Pages.horeca.cafe-text")}/>
		</>
	)
}