import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';

export default function Contacts() {
	return (	
		<Container>
			<Row>
				<Col sm={12} lg={12}>
					<p className='contacts-title'>Kontakti</p>
				</Col>
				<Col sm={12} lg={4}>
					<div className='contacts-wrapper'>
						<p className='place-title'>Mēbeļu salons ELIZA</p>
						<p className='place-text'>Rīga, А. Deglava iela 50, LV-1035</p>
						<p className='place-text'>teika@eliza-k.lv</p>
						<p className='place-text'>+371 29 112 49</p>
					</div>
				</Col>
				<Col sm={12} lg={4}>
					<div className='contacts-wrapper'>
						<p className='place-title'>Porolona ražotne</p>
						<p className='place-text'>Rīga, A. Deglava iela 52A,</p>
						<p className='place-text'>LV-1035 order@eliza-k.lv</p>
						<p className='place-text'>+371 28 363 860</p>
					</div>
				</Col>
				<Col sm={12} lg={4}>
					<div className='contacts-wrapper'>
						<p className='place-title'>Audumu noliktava</p>
						<p className='place-text'>Rīga, А. Deglava iela 50, LV-1035</p>
						<p className='place-text'>audumi@eliza-k.lv</p>
						<p className='place-text'>+371 26 599 422</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
