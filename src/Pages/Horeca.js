import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import hotel from "../assets/images/hoReCa/Ho.png";
import Cafe from "../assets/images/hoReCa/Ca.png";
import restaraunt from "../assets/images/hoReCa/Re.png";
import { useTranslation } from 'react-i18next';


function HorecaItem(props) {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<p className='horeca-header'>{props.header}</p>
						<p className='horeca-text'>{props.text}</p>
					</Col>
				</Row>
			</Container>
			
			<LazyLoadImage className='horeca-img' rel='' alt='' src={props.img} />
		</>
	)
}

export default function Horeca() {
	const { t } = useTranslation();
	return (
		<>
			<HorecaItem header={t("Pages.horeca.hotel-title")} img={hotel} text={t("Pages.horeca.hotel-text")} />
			<HorecaItem header={t("Pages.horeca.restaurant-title")} img={restaraunt} text={t("Pages.horeca.restaurant-text")} />			
			<HorecaItem header={t("Pages.horeca.cafe-title")} img={Cafe} text={t("Pages.horeca.cafe-text")} />
		</>
	)
}