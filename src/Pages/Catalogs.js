import React from 'react';
import '../assets/scss/_catalogs.scss';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import collection_2018 from "../assets/images/catalog/collection_2018.jpg";
import collection_2019 from "../assets/images/catalog/collection_2019.jpg";
import collection_2021 from "../assets/images/catalog/collection_2021.jpg";
// pdf files
import catalog_2018 from "../assets/Files/Catalogs/catalog_2018.pdf";
import catalog_2019 from "../assets/Files/Catalogs/catalog_2019.pdf";
import catalog_2021 from "../assets/Files/Catalogs/catalog_2021.pdf";

function Catalog(props) {
	return (
		<Col sm={12} lg={4}>
			<div className='catalog'>
				<a href={props.link} className="-link" target='_blank' rel='noopener noreferrer'>
					<img src={props.img} alt='' className="-img"></img>
				</a>
				<span className='-text'>{props.title}</span>
			</div>
		</Col>
	);
}

export default function Catalogs () {
	const { t } = useTranslation();
	return (		
		<Container>
			<Row>
				<Col sm={12} >
					<p className='catalogs-title'>{t("Pages.catalogs.pageTitle")}</p>
				</Col>
				<Catalog link={catalog_2018} img={collection_2018} title={t("Pages.catalogs.catalog") + " 2018"} />
				<Catalog link={catalog_2019} img={collection_2019} title={t("Pages.catalogs.catalog") + " 2019"} />
				<Catalog link={catalog_2021} img={collection_2021} title={t("Pages.catalogs.catalog") + " 2021"} />
			</Row>
		</Container>
	);
}
   