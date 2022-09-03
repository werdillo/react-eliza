import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie'

const DropdownLanguage = () => {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState(cookies.get('i18next'));
	const handleLangChange = evt => {
		const lang = evt.target.value;
		console.log(lang);
		setLanguage(lang);
		i18n.changeLanguage(lang);
	};

	return (
		<select onChange={handleLangChange} value={language}>
			<option value="lv">LV</option>
			<option value="en">EN</option>
			<option value="ru">RU</option>
		</select>
	);
};

export default DropdownLanguage;