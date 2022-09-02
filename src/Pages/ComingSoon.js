import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import back from '../assets/images/comingSoon/comingSoon.jpeg'
import { useTranslation } from 'react-i18next';


export default function ComingSoon() {
	const { t } = useTranslation();	
	return (
		<div className='coming-soon-wrapper'>
			<img className='coming-soon-picture' rel='' alt='' src={back}/>
			<span className='coming-soon-text'>{t("Pages.coming-soon.title")}</span>
		</div>
	)
}
