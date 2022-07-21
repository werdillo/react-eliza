import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import sofa from "../assets/images/production/sofa.png"
import armchair from "../assets/images/production/armchair.png";
import puffs from "../assets/images/production/puffs.png";
import sofa_beds from "../assets/images/production/sofa-beds.png";
import tahtas from "../assets/images/production/tahtas.png";
import beds from "../assets/images/production/beds.png";

function ProductionLink(props) {
	return (
		<Col sm={12} md={6} lg={4}>
			<Link to={props.link}>
				<div className='production-type-wrapper'>
					<img src={props.img} alt='' className='production-type-image'></img>
					<div class="production-type-text">{props.text}</div>
				</div>
			</Link>
		</Col>
	);
}

export default function Production() {
	return (
		<Container fluid>
			<Row>
				<Col sm={12} >
					<p className='production-type-title'>Mūsu produkcija</p>
				</Col>
				<ProductionLink img={sofa} link="sofa" text="Dīvāni" />
				<ProductionLink img={sofa_beds} link="sofa_beds" text="Dīvāni-gultas" />
				<ProductionLink img={beds} link="beds" text="Gultas" />
				<ProductionLink img={tahtas} link="tahtas" text="Tahtas" />
				<ProductionLink img={armchair} link="chairs" text="Krēsli" />
				<ProductionLink img={puffs} link="puffs" text="Pufi un banketes" />
			</Row>
		</Container>
	);
}