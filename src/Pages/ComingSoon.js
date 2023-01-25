import React from 'react';
import '../assets/scss/_not-found.scss';
import 'bootstrap/dist/css/bootstrap.css'
import back from '../assets/images/comingSoon/comingSoon.jpeg'
import { useTranslation } from 'react-i18next';


export default function ComingSoon() {
	const { t } = useTranslation();	
	return (
		<div className='not-found'>
			<img className='-img' rel='' alt='' src={back} />
			<span className='-text'>{t("Pages.coming-soon.title")}</span>
		</div>
	)
}
