import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import map from "../assets/images/map.png";

export default function Map() {
 	return (
		<Container fluid>
			<Row>
				<Col xs={12} md={4}>
					<p className='map-text'>Mūsu tirdzniecības pārstāvji atrodas 5 dažādos ģeogrāfiskajos reģionos.</p>
				</Col>
				<Col xs={12} md={4}>
					<p className='map-text'>Privātie un komercpircēji no 11 visattīstītākajām valstīm Eiropā un Ziemeļamerikā.</p>
				</Col>
				<Col xs={12} md={4}>
					<p className='map-text'>Daudziem no tiem esam vienīgais pārstāvis Baltijas valstīs.</p>
				</Col>
				<Col>
					<img src={map} alt='' className='map-image'></img>
				</Col>
			</Row>
		</Container>
	);
}
