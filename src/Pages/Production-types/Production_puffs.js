import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductLanding from '../../Components/ProductLanding';
import President from "../../assets/images/production/puffs/president/president_1.png";
import Round from "../../assets/images/production/puffs/round/round_1.png";
import Royal from "../../assets/images/production/puffs/royal/royal_1.png";

function ProductLink(props) {
	return (
		<Col sm={12} lg={4}>
			<Link to={props.link}>
				<ProductLanding img={props.img} text={props.text} />
			</Link>
		</Col>
	);
}

export default function Production_puffs() {
	return (
		<div className='products-container'>
			<Container fluid>
				<Row>
					<Col sm={12} lg={12}>
						<p className='production-type-title'>Pufi un banketes</p>
					</Col>
					<ProductLink link='details/president' img={President} text="PRESIDENT" />
					<ProductLink link='details/round' img={Round} text="ROUND" />
					<ProductLink link='details/royal' img={Royal} text="ROYAL" />
				</Row>
			</Container>
			
		</div>
	);
}
