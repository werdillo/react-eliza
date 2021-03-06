import React from 'react';
import '../../App.css';
import { Route, Routes } from 'react-router-dom';

import ProductionItem from '../../Components/ProductionItem';
export default function SofaDetails() {
	const president_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, elastīga gumija, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, sintepons" },
	];
	const president_img = [
		{ src: require("../../assets/images/production/puffs/president/president_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/puffs/president/president_2.png"), title: "img2" },
	];

	const round_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, elastīga gumija, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, sintepons" },
	];
	const round_img = [
		{ src: require("../../assets/images/production/puffs/round/round_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/puffs/round/round_2.png"), title: "img2" },
	];

	const royal_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, elastīga gumija, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, sintepons" },
	];
	const royal_img = [
		{ src: require("../../assets/images/production/puffs/royal/royal_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/puffs/royal/royal_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/puffs/royal/royal_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/puffs/royal/royal_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/puffs/royal/royal_5.png"), title: "img5" },
	];

	
	return (
		<>
			<Routes>
				<Route path="president"
					element={<ProductionItem
						title='PRESIDENT'
						description=""
						specs={president_specs}
						images={president_img} />}						
				/>
				<Route path="round"
					element={<ProductionItem
						title='ROUND'
						description=""
						specs={round_specs}
						images={round_img} />}
				/>
				<Route path="royal"
					element={<ProductionItem
						title='ROYAL'
						description=""
						specs={royal_specs}
						images={royal_img} />}
				/>
			</Routes>

		</>
	);
}
