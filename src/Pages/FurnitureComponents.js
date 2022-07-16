import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';

import textile from "../assets/images/furnitureComponents/textile.png";
import porolon from "../assets/images/furnitureComponents/porolon.png";

export default function FurnitureComponents() {
	return (
		<>
			<Container fluid className='furniture-components-container'>
				<Row>
					<Col sm={12} lg={6}>
						<div className='furniture-components-box'>
							<img className='horeca-img' alt='' src={porolon}></img>				
							<p className='furniture-components-header'>Porolons</p>
							<p className='furniture-components-text'>Mēs ražojam izstrādājumus no porolona. </p>
						</div>
					</Col>
					<Col sm={12} lg={6}>
						<div className='furniture-components-box'>
							<img className='horeca-img' alt='' src={textile}></img>				
							<p className='furniture-components-header'>Audumi</p>
							<p className='furniture-components-text'>Piedāvājam lielu audumu un materiālu izvēli mīkstajām mēbelēm.</p>
						</div>
					</Col>
				</Row>
			</Container>	
		</>
	);
}