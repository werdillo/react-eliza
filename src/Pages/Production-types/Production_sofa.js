import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import ProductLanding from '../../Components/ProductLanding';

import Aerial from "../../assets/images/production/sofas/aerial/aerial_1.png";
import Altitude from "../../assets/images/production/sofas/altitude/altitude_1.png";
import Backton from "../../assets/images/production/sofas/backton/backton_1.png";

import Baja from "../../assets/images/production/sofas/baja/baja_1.png";
import Channel from "../../assets/images/production/sofas/channel/channel_1.png";
import Duke from "../../assets/images/production/sofas/duke/duke_1.png";

import FrontSide from "../../assets/images/production/sofas/frontSide/frontSide_1.png";
import Hanapepe from "../../assets/images/production/sofas/hanapepe/hanapepe_1.png";
import Keala from "../../assets/images/production/sofas/keala/keala_1.png";

import Maverick from "../../assets/images/production/sofas/maverick/maverick_1.png";
import Padington from "../../assets/images/production/sofas/padington/padington_1.png";
import Polo from "../../assets/images/production/sofas/polo/polo_1.png";

import Spencer from "../../assets/images/production/sofas/spencer/spencer_1.png";
import SummerSwell from "../../assets/images/production/sofas/summerSwell/summerSwell_1.png";

function ProductLink(props) {
	return (
		<Col sm={12} lg={4}>
			<Link to={props.link}>
				<ProductLanding img={props.img} text={props.text} />
			</Link>
		</Col>
	);
}

export default function Production_sofas() {
	return (
		<div className='products-container'>
			<Container fluid>
				<Row>
					<Col sm={12} lg={12}>
						<p className='production-type-title'>Dīvāni</p>
					</Col>
					<ProductLink link='details/aerial' img={Aerial} text="AERIAL" />
					<ProductLink link='details/altitude' img={Altitude} text="ALTITUDE" />
					<ProductLink link='details/backton' img={Backton} text="BACKTON" />

					<ProductLink link='details/baja' img={Baja} text="BAJA" />
					<ProductLink link='details/channel' img={Channel} text="CHANNEL" />
					<ProductLink link='details/duke' img={Duke} text="DUKE" />

					<ProductLink link='details/frontSide' img={FrontSide} text="FRONT-SIDE" />
					<ProductLink link='details/hanapepe' img={Hanapepe} text="HANAPEPE" />
					<ProductLink link='details/keala' img={Keala} text="KEALA" />

					<ProductLink link='details/maverick' img={Maverick} text="MAVERICK" />
					<ProductLink link='details/padington' img={Padington} text="PADINGTON" />
					<ProductLink link='details/polo' img={Polo} text="POLO" />
					
					<ProductLink link='details/spencer' img={Spencer} text="SPENCER" />
					<ProductLink link='details/summerSwell' img={SummerSwell} text="SUMMER SWELL" />
				</Row>
			</Container>

		</div>
	);
}
