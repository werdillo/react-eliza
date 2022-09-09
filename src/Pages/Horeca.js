import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import hotel from "../assets/images/hoReCa/Ho.png";
import Cafe from "../assets/images/hoReCa/Ca.png";
import restaraunt from "../assets/images/hoReCa/Re.png";


function HorecaItem(props) {
	return (
		<div className='horeca-wrapper'>
			<LazyLoadImage className='horeca-img' rel='' alt='' src={props.img} />
			<div className='horeca-block'>
				<p className='horeca-header'>{props.header}</p>
				<p className='horeca-text'>{props.text}</p>

			</div>
		</div>
	)
}

export default function Horeca() {
	const { t } = useTranslation();
	return (
		<>
			<HorecaItem header={t("Pages.horeca.hotel-title")} img={hotel} text={t("Pages.horeca.hotel-text")} />
			<HorecaItem header={t("Pages.horeca.restaurant-title")} img={restaraunt} text={t("Pages.horeca.hotel-text")} />			
			<HorecaItem header={t("Pages.horeca.cafe-title")} img={Cafe} text={t("Pages.horeca.hotel-text")}/>
		</>
	)
}