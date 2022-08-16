import React from 'react'

import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import ProductLanding from '../../../Components/ProductLanding';
import { Link } from 'react-router-dom';

import Lanai from "../../../assets/images/production/beds/lanai/lanai_1.png";
import Pointbreak from "../../../assets/images/production/beds/pointbreak/pointbreak_1.png";


function ProductLink(props) {
	return (
		<Col sm={12} lg={4}>
			<Link to={props.link}>
				<ProductLanding img={props.img} text={props.text} />
			</Link>
		</Col>
	);
}

export default function SophisticatedLivingBeds() {
  return (
	  <div className='products-container'>
		  <Container fluid>
			  <Row>
				  <Col sm={12} lg={12}>
					  <p className='collection-type-title'>Gultas</p>
				  </Col>
				  <ProductLink link='/Production/beds/details/pointbreak' img={Pointbreak} text="POINTBREAK" />
				  <ProductLink link='/Production/beds/details/lanai' img={Lanai} text="LANAI" />
			  </Row>
		  </Container>
	  </div>
  )
}
