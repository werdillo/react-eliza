import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';

export default function TextBlock(props) {
	return (
		<Container>
			<Row>
				<Col xs={12} lg={12}>
					<p className='TextBlock-header'>{props.header}</p>
					<p className='TextBlock-text'>{props.text}</p>
				</Col>	
			</Row>					
		</Container>
	)
}