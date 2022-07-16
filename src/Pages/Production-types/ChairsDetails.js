import React from 'react';
import '../../App.css';
import { Route, Routes } from 'react-router-dom';

import ProductionItem from '../../Components/ProductionItem';
export default function SofaDetails() {
	const altitude_specs = [
		{},
	];
	const altitude_img = [
		{ src: require("../../assets/images/production/chairs/altitude/altitude_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/chairs/altitude/altitude_2.png"), title: "img2" },
	];

	const elefant_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks", },
		{ title: "Muguras spilveni", content: "Sintipons", },
	];
	const elefant_img = [
		{ src: require("../../assets/images/production/chairs/elefant/elefant_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/chairs/elefant/elefant_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/chairs/elefant/elefant_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/chairs/elefant/elefant_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/chairs/elefant/elefant_5.png"), title: "img5" },
	];

	const flamingo_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks", },
		{ title: "Muguras spilveni", content: "Sintipons", },
	];
	const flamingo_img = [
		{ src: require("../../assets/images/production/chairs/flamingo/flamingo_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/chairs/flamingo/flamingo_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/chairs/flamingo/flamingo_3.png"), title: "img3" },
	];


	const haleiwa_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks", },
		{ title: "Muguras spilveni", content: "Sintipons", },
	];
	const haleiwa_img = [
		{ src: require("../../assets/images/production/chairs/haleiwa/haleiwa_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/chairs/haleiwa/haleiwa_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/chairs/haleiwa/haleiwa_3.png"), title: "img3" },
	];

	const hilton_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks", },
	];
	const hilton_img = [
		{ src: require("../../assets/images/production/chairs/hilton/hilton_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/chairs/hilton/hilton_2.png"), title: "img2" },
	];

	const local_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks", },
	];
	const local_img = [
		{ src: require("../../assets/images/production/chairs/local/local_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/chairs/local/local_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/chairs/local/local_3.png"), title: "img3" },
	];

	const mirre_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks", },
	];
	const mirre_img = [
		{ src: require("../../assets/images/production/chairs/mirre/mirre_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/chairs/mirre/mirre_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/chairs/mirre/mirre_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/chairs/mirre/mirre_4.png"), title: "img4" },
	];

	const nord_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons", },
	];
	const nord_img = [
		{ src: require("../../assets/images/production/chairs/nord/nord_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/chairs/nord/nord_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/chairs/nord/nord_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/chairs/nord/nord_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/chairs/nord/nord_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/chairs/nord/nord_6.png"), title: "img6" },
	];

	const polo_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons", },
	];
	const polo_img = [
		{ src: require("../../assets/images/production/chairs/polo/polo_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/chairs/polo/polo_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/chairs/polo/polo_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/chairs/polo/polo_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/chairs/polo/polo_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/chairs/polo/polo_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/chairs/polo/polo_7.png"), title: "img7" },
		{ src: require("../../assets/images/production/chairs/polo/polo_8.png"), title: "img8" },
		{ src: require("../../assets/images/production/chairs/polo/polo_9.png"), title: "img9" },
		{ src: require("../../assets/images/production/chairs/polo/polo_10.png"), title: "img10" },
	];

	const serenity_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kartons, porolons, sintepons, elastīga gumija", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, sintepons", },
	];
	const serenity_img = [
		{ src: require("../../assets/images/production/chairs/serenity/serenity_1.png"), title: "img1" },
	];

	const spencer_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
	];
	const spencer_img = [
		{ src: require("../../assets/images/production/chairs/spencer/spencer_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/chairs/spencer/spencer_2.png"), title: "img1" },
	];




	return (
		<>
			<Routes>
				<Route path="altitude"
					element={<ProductionItem
						title='ALTITUDE'
						description=""
						specs={altitude_specs}
						images={altitude_img} />}
				/>
				<Route path="elefant"
					element={<ProductionItem
						title='ELEFANT'
						description=""
						specs={elefant_specs}
						images={elefant_img} />}
				/>
				<Route path="flamingo"
					element={<ProductionItem
						title='FLAMINGO'
						description=""
						specs={flamingo_specs}
						images={flamingo_img} />}
				/>
				<Route path="haleiwa"
					element={<ProductionItem
						title='HALEIWA'
						description=""
						specs={haleiwa_specs}
						images={haleiwa_img} />}
				/>
				<Route path="hilton"
					element={<ProductionItem
						title='HILTON'
						description=""
						specs={hilton_specs}
						images={hilton_img} />}
				/>
				<Route path="local"
					element={<ProductionItem
						title='LOCAL'
						description=""
						specs={local_specs}
						images={local_img} />}
				/>
				<Route path="mirre"
					element={<ProductionItem
						title='MIRRE'
						description=""
						specs={mirre_specs}
						images={mirre_img} />}
				/>
				<Route path="nord"
					element={<ProductionItem
						title='NORD'
						description=""
						specs={nord_specs}
						images={nord_img} />}
				/>
				<Route path="polo"
					element={<ProductionItem
						title='POLO'
						description=""
						specs={polo_specs}
						images={polo_img} />}
				/>
				<Route path="serenity"
					element={<ProductionItem
						title='SERENITY'
						description=""
						specs={serenity_specs}
						images={serenity_img} />}
				/>
				<Route path="spencer"
					element={<ProductionItem
						title='SPENCER'
						description=""
						specs={spencer_specs}
						images={spencer_img} />}
				/>
			</Routes>

		</>
	);
}
