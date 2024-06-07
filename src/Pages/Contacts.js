import React from 'react';
import { Helmet } from "react-helmet";
import '../assets/scss/_contacts.scss';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Contacts() {
	const { t } = useTranslation();
	return (
		<Container>
			<Row>
				<Helmet>
					<title>Contacts</title>
					<meta name="description" content="Eliza contacts" />
					<meta name="description" content="Addess: Deglava iela 50" />
					<meta name="description" content="Working days: 11:00 - 18:00" />
					<meta name="description" content="saturday - 11:00 - 15:00" />
					<meta name="keywords" content="eliza, eliza-k, contacts, working time, adress" />
				</Helmet>
				<Col sm={12} lg={12}>
					<p className='contacts-title'>{t("Pages.contacts.pageTitle")}</p>
				</Col>
				<Col sm={12} lg={4}>
					<div className='contacts-wrapper'>
						<p className='-text xl special'>{t("Pages.contacts.salon")}</p>
						<p className='-text'>Rīga, А. Deglava iela 50, LV-1035</p>
						<p className='-text'>teika@eliza-k.lv</p>
						<p className='-text'>67802343, 29112499</p>
						<p className='-text xl work-time'>{t("Pages.contacts.working-time")}</p>
						<p className='-text'>{t("Pages.contacts.working-days")} 11:00 - 18:00</p>
						<p className='-text'>{t("Pages.contacts.sat")} 11:00 - 15:00</p>
						<p className='-text'>{t("Pages.contacts.sun")}</p>
					</div>
				</Col>
				<Col sm={12} lg={4}>
					<div className='contacts-wrapper'>
						<p className='-text xl special'>{t("Pages.contacts.porolon")}</p>
						<p className='-text'>Rīga, A. Deglava iela 52A,</p>
						<p className='-text'>LV-1035 order@eliza-k.lv</p>
						<p className='-text'>67570331, 27862121, 26653510</p> 
						<p className='-text xl work-time'>{t("Pages.contacts.working-time")}</p>
						<p className='-text'>{t("Pages.contacts.working-days")} 8:30 - 16:00</p>
						<p className='-text'>{t("Pages.contacts.breaktime")} 12:00 - 13:00</p>
						<p className='-text'>{t("Pages.contacts.sat-sun")}</p>
						<p className='-text orange'>{t("Pages.contacts.closed")} 22.07.2024 - 04.08.2024</p>
					</div>
				</Col>
				<Col sm={12} lg={4}>
					<div className='contacts-wrapper'>
						<p className='-text xl special'>{t("Pages.contacts.textile")}</p>
						<p className='-text'>Rīga, A. Deglava 50 iela K-1</p>
						<p className='-text'>audumi@eliza-k.lv</p>
						<p className='-text'>26599422</p>
						<p className='-text xl work-time'>{t("Pages.contacts.working-time")}</p>
						<p className='-text'>{t("Pages.contacts.working-days")} 9:00 - 16:30</p>
						<p className='-text'>{t("Pages.contacts.breaktime")} 12:30 - 13:00</p>
						<p className='-text'>{t("Pages.contacts.sat-sun")}</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
