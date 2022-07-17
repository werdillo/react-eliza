import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// products images
import ProductLanding from '../../Components/ProductLanding';
import Altitude from "../../assets/images/production/chairs/altitude/altitude_1.png";
import Elefant from "../../assets/images/production/chairs/elefant/elefant_1.png";
import Flamingo from "../../assets/images/production/chairs/flamingo/flamingo_1.png";
import Haleiwa from "../../assets/images/production/chairs/haleiwa/haleiwa_1.png";
import Hilton from "../../assets/images/production/chairs/hilton/hilton_1.png";
import Local from "../../assets/images/production/chairs/local/local_1.png";
import Mirre from "../../assets/images/production/chairs/mirre/mirre_1.png";
import Nord from "../../assets/images/production/chairs/nord/nord_1.png";
import Polo from "../../assets/images/production/chairs/polo/polo_1.png";
import Serenity from "../../assets/images/production/chairs/serenity/serenity_1.png";
import Spencer from "../../assets/images/production/chairs/spencer/spencer_1.png";

function ProductLink(props) {
	return (
		<Col sm={12} lg={4}>
			<Link to={props.link}>
				<ProductLanding img={props.img} text={props.text} />
			</Link>
		</Col>
	);
}

export default function Production_chairs() {
	return (
		<div className='products-container'>
			<Container fluid >
				<Row>
					<Col sm={12} lg={12}>
						<p className='production-type-title'>Krēsli</p>
					</Col>
					<ProductLink link='details/altitude' img={Altitude} text="ALTITUDE" />
					<ProductLink link='details/elefant' img={Elefant} text="ELEFANT" />
					<ProductLink link='details/flamingo' img={Flamingo} text="FLAMINGO" />
					<ProductLink link='details/haleiwa' img={Haleiwa} text="HALEIWA" />
					<ProductLink link='details/hilton' img={Hilton} text="HILTON" />
					<ProductLink link='details/local' img={Local} text="LOCAL" />
					<ProductLink link='details/mirre' img={Mirre} text="MIRRE" />
					<ProductLink link='details/nord' img={Nord} text="NORD" />
					<ProductLink link='details/polo' img={Polo} text="POLO" />
					<ProductLink link='details/serenity' img={Serenity} text="SERENITY" />
					<ProductLink link='details/spencer' img={Spencer} text="SPENCER" />
				</Row>
			</Container>
		</div>
	);
}
