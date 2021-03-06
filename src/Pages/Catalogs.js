import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';

import collection_2018 from "../assets/images/collection/collection_2018.jpg";
import collection_2019 from "../assets/images/collection/collection_2019.jpg";
import collection_2021 from "../assets/images/collection/collection_2021.jpg";
// pdf files
import catalog_2018 from "../assets/Files/Catalogs/catalog_2018.pdf";
import catalog_2019 from "../assets/Files/Catalogs/catalog_2019.pdf";
import catalog_2021 from "../assets/Files/Catalogs/catalog_2021.pdf";

function Catalog(props) {
	return (
		<Col sm={12} lg={4}>
			<div className='catalog-wraper'>
				<a href={props.link} target='_blank' rel='noopener noreferrer'>
					<img src={props.img} alt='' className="catalog-image"></img>
				</a>
				<span className='catalog-text'>{props.title}</span>
			</div>
		</Col>
	);
}

export default function Catalogs () {
	return (		
		<Container>
			<Row>
				<Col sm={12} >
					<p className='production-type-title'>Katalogi</p>
				</Col>
				<Catalog link={catalog_2018} img={collection_2018} title="Katalogs 2018" />
				<Catalog link={catalog_2019} img={collection_2019} title="Katalogs 2019" />
				<Catalog link={catalog_2021} img={collection_2021} title="Katalogs 2021" />
			</Row>
		</Container>
	);
}
   