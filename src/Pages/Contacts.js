import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Contacts() {
	const { t } = useTranslation();
	return (
		// <div className="contacts-container">
		<Container fluid>
			<Row>
				<Col sm={12} lg={12}>
					<p className='contacts-title'>{t("Pages.contacts.pageTitle")}</p>
				</Col>
				<Col sm={12} lg={4}>
					<div className='contacts-wrapper'>
						<p className='place-title special'>{t("Pages.contacts.salon")}</p>
						<p className='place-text'>Rīga, А. Deglava iela 50, LV-1035</p>
						<p className='place-text'>teika@eliza-k.lv</p>
						<p className='place-text'>+371 29 112 499</p>
						<p className='place-text'></p>
						<p className='place-text'></p>
						<p className='place-title work-time'>{t("Pages.contacts.working-time")}</p>
						<p className='place-text'>{t("Pages.contacts.working-days")} 10:00 - 18:00</p>
						<p className='place-text'>{t("Pages.contacts.sat")} 10:00 - 17:00</p>
						<p className='place-text contacts-bottom'>{t("Pages.contacts.sun")}</p>
					</div>
				</Col>
				<Col sm={12} lg={4}>
					<div className='contacts-wrapper'>
						<p className='place-title special'>{t("Pages.contacts.porolon")}</p>
						<p className='place-text'>Rīga, A. Deglava iela 52A,</p>
						<p className='place-text'>LV-1035 order@eliza-k.lv</p>
						<p className='place-text'>+371 28 363 860</p>
						<p className='place-text'></p>
						<p className='place-text'></p>
						<p className='place-title work-time'>{t("Pages.contacts.working-time")}</p>
						<p className='place-text'>{t("Pages.contacts.working-days")} 10:00 - 18:00</p>
						<p className='place-text'>{t("Pages.contacts.sat")} 10:00 - 17:00</p>
						<p className='place-text contacts-bottom'>{t("Pages.contacts.sun")}</p>

					</div>
				</Col>
				<Col sm={12} lg={4}>
					<div className='contacts-wrapper'>
						<p className='place-title special'>{t("Pages.contacts.textile")}</p>
						<p className='place-text'>Rīga, A. Deglava 50 iela K-1</p>
						<p className='place-text'>audumi@eliza-k.lv</p>
						<p className='place-text'>+371 26 599 422</p>
						<p className='place-title work-time'>{t("Pages.contacts.working-time")}</p>
						<p className='place-text'>{t("Pages.contacts.working-days")} 10:00 - 18:00</p>
						<p className='place-text'>{t("Pages.contacts.sat")} 10:00 - 17:00</p>
						<p className='place-text contacts-bottom'>{t("Pages.contacts.sun")}</p>

					</div>
				</Col>
			</Row>
		</Container>
	);
}
