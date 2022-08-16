import React from 'react'

import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import ProductLanding from '../../../Components/ProductLanding';
import { Link } from 'react-router-dom';

import Daniela from "../../../assets/images/production/beds/daniela/daniela_1.png";
import Gala from "../../../assets/images/production/beds/gala/gala_1.png";
import Melene from "../../../assets/images/production/beds/melene/melene_1.png";
import Tossa from "../../../assets/images/production/beds/tossa/tossa_1.png";



function ProductLink(props) {
	return (
		<Col sm={12} lg={4}>
			<Link to={props.link}>
				<ProductLanding img={props.img} text={props.text} />
			</Link>
		</Col>
	);
}

export default function ElizaBeds() {
  return (
	  <div className='products-container'>
		<Container fluid>
			<Row>
				<Col sm={12} lg={12}>
					<p className='collection-type-title'>Gultas</p>
				</Col>
			  <ProductLink link='/Production/beds/details/daniela' img={Daniela} text="DANIELA" />
			  <ProductLink link='/Production/beds/details/gala' img={Gala} text="GALA" />
			  <ProductLink link='/Production/beds/details/melene' img={Melene} text="MELENE" />
			  <ProductLink link='/Production/beds/details/tossa' img={Tossa} text="TOSSA" />
			</Row>
		</Container>
	</div>
  )
}
