import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';

import textile from "../assets/images/furnitureComponents/textile.png";
import porolon from "../assets/images/furnitureComponents/porolon.png";

import ClipLoader from "react-spinners/ClipLoader";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { useTranslation } from 'react-i18next';

export default function FurnitureComponents() {
	const { t } = useTranslation();
	return (
		<Container fluid className='furniture-components-container'>
			<Row>
				<Col sm={12} lg={6}>
					<div className='furniture-components-box'>
						<LazyLoadImage className='furniture-components-img' alt='' src={porolon} placeholder={<ClipLoader />} />			
						<p className='furniture-components-header'>{t("Pages.components.porolon-title")}</p>
						<p className='furniture-components-text'>{t("Pages.components.porolon-text")}</p>
					</div>
				</Col>
				<Col sm={12} lg={6}>
					<div className='furniture-components-box'>
						<LazyLoadImage className='furniture-components-img' alt='' src={textile} placeholder={<ClipLoader />} />			
						<p className='furniture-components-header'>{t("Pages.components.textile-title")}</p>
						<p className='furniture-components-text'>{t("Pages.components.textile-text")}</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}