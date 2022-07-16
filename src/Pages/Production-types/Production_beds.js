import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import ProductLanding from '../../Components/ProductLanding';
import { Link } from 'react-router-dom';

import Daniela from "../../assets/images/production/beds/daniela/daniela_1.png";
import Gala from "../../assets/images/production/beds/gala/gala_1.png";
import Kvest from "../../assets/images/production/beds/kvest/kvest_1.png";
import Lanai from "../../assets/images/production/beds/lanai/lanai_1.png";
import Lissi from "../../assets/images/production/beds/lissi/lissi_1.png";
import Melene from "../../assets/images/production/beds/melene/melene_1.png";
import Pointbreak from "../../assets/images/production/beds/pointbreak/pointbreak_1.png";
import Tossa from "../../assets/images/production/beds/tossa/tossa_1.png";

function ProductLink(props) {
	return (
		<Col sm={12} lg={4}>
			<Link to={props.link}>
				<ProductLanding img={props.img} text={props.text} />
			</Link>
		</Col>
	);
}

export default function Production_beds() {
	return (
		<div className='products-container'>
			<Container fluid>
				<Row>
					<Col sm={12} lg={12}>
						<p className='production-type-title'>Gultas</p>
					</Col>
					<ProductLink link='details/daniela' img={Daniela} text="DANIELA" />
					<ProductLink link='details/gala' img={Gala} text="GALA" />
					<ProductLink link='details/melene' img={Melene} text="MELENE" />

					<ProductLink link='details/tossa' img={Tossa} text="TOSSA" />
					<ProductLink link='details/pointbreak' img={Pointbreak} text="POINTBREAK" />
					<ProductLink link='details/lanai' img={Lanai} text="LANAI" />

					<ProductLink link='details/kvest' img={Kvest} text="KVEST" />
					<ProductLink link='details/lissi' img={Lissi} text="LISSI" />
				</Row>
			</Container>
		</div>
	);
}
