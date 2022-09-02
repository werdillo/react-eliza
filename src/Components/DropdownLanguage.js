import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const DropdownLanguage = () => {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState("id");

	const handleLangChange = evt => {
		const lang = evt.target.value;
		console.log(lang);
		setLanguage(lang);
		i18n.changeLanguage(lang);
	};

	return (
		<select onChange={handleLangChange} value={language}>
			<option value="ru">RU</option>
			<option value="lv">LV</option>
			<option value="en">EN</option>
		</select>
	);
};

export default DropdownLanguage;