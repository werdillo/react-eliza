import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductLanding from '../../Components/ProductLanding';
import Kelly from "../../assets/images/production/tahtas/kelly/kelly_1.png";
import Lama from "../../assets/images/production/tahtas/lama/lama_1.png";
import Selga from "../../assets/images/production/tahtas/selga/selga_1.png";
import Tahta1 from "../../assets/images/production/tahtas/tahta1/tahta1_1.png";

function ProductLink(props) {
	return (
		<Col sm={12} lg={4}>
			<Link to={props.link}>
				<ProductLanding img={props.img} text={props.text} />
			</Link>
		</Col>
	);
}

export default function Production_tahtas() {
	return (
		<div className='products-container'>
			<Container fluid>
				<Row>
					<Col sm={12} lg={12}>
						<p className='production-type-title'>Tahtas</p>
					</Col>
					<ProductLink link='details/kelly' img={Kelly} text="KELLY" />
					<ProductLink link='details/lama' img={Lama} text="LAMA" />
					<ProductLink link='details/selga' img={Selga} text="SELGA" />
					<ProductLink link='details/tahta1' img={Tahta1} text="TAHTA 1" />
				</Row>
			</Container>

		</div>
	);
}