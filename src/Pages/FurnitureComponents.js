import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';

import textile from "../assets/images/furnitureComponents/textile.png";
import porolon from "../assets/images/furnitureComponents/porolon.png";

import ClipLoader from "react-spinners/ClipLoader";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function FurnitureComponents() {
	return (
		<Container fluid className='furniture-components-container'>
			<Row>
				<Col sm={12} lg={6}>
					<div className='furniture-components-box'>
						<LazyLoadImage className='horeca-img' alt='' loading='lazy' src={porolon} placeholder={<ClipLoader />} />			
						<p className='furniture-components-header'>Porolons</p>
						<p className='furniture-components-text'>Mēs ražojam izstrādājumus no porolona. </p>
					</div>
				</Col>
				<Col sm={12} lg={6}>
					<div className='furniture-components-box'>
						<LazyLoadImage className='horeca-img' alt='' loading='lazy' src={textile} placeholder={<ClipLoader />} />			
						<p className='furniture-components-header'>Audumi</p>
						<p className='furniture-components-text'>Piedāvājam lielu audumu un materiālu izvēli mīkstajām mēbelēm.</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}