import React from 'react';
import '../assets/scss/_furniture-components.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';

import textile from "../assets/images/furnitureComponents/textile.png";
import porolon from "../assets/images/furnitureComponents/porolon.png";

import ClipLoader from "react-spinners/ClipLoader";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function FurnitureComponents() {
	const { t } = useTranslation();
	return (
		<Container fluid className='furniture-components-container'>
			<Row>
				<Col sm={12} lg={6}>
					<div className='furniture-components-box'>
						<a href="http://porolons.lv/" target="_blank" rel="noopener noreferrer">
							<LazyLoadImage className='furniture-components-img' alt='' src={porolon} placeholder={<ClipLoader />} />	
						</a>		
						<p className='furniture-components-header'>{t("Pages.components.porolon-title")}</p>
						<p className='furniture-components-text'>{t("Pages.components.porolon-text")}</p>
					</div>
				</Col>
				<Col sm={12} lg={6}>
					<div className='furniture-components-box'>
						<Link to="/textile">
							<LazyLoadImage className='furniture-components-img' alt='' src={textile} placeholder={<ClipLoader />} />			
						</Link>
						<p className='furniture-components-header'>{t("Pages.components.textile-title")}</p>
						<p className='furniture-components-text'>{t("Pages.components.textile-text")}</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}