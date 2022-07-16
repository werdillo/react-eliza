import React from 'react';
import '../../App.css';
import { Route, Routes } from 'react-router-dom';

import ProductionItem from '../../Components/ProductionItem';
export default function TahtasDetails() {
	const kelly_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
	];
	const kelly_img = [
		{ src: require("../../assets/images/production/tahtas/kelly/kelly_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/tahtas/kelly/kelly_2.png"), title: "img2" },
	];	

	const lama_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const lama_img = [
		{ src: require("../../assets/images/production/tahtas/lama/lama_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/tahtas/lama/lama_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/tahtas/lama/lama_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/tahtas/lama/lama_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/tahtas/lama/lama_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/tahtas/lama/lama_6.png"), title: "img6" },
	];

	const selga_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "plastmasas" },
	];
	const selga_img = [
		{ src: require("../../assets/images/production/tahtas/selga/selga_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/tahtas/selga/selga_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/tahtas/selga/selga_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/tahtas/selga/selga_4.png"), title: "img4" },
	];

	const tahta1_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "plastmasas" },
	];
	const tahta1_img = [
		{ src: require("../../assets/images/production/tahtas/tahta1/tahta1_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/tahtas/tahta1/tahta1_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/tahtas/tahta1/tahta1_3.png"), title: "img3" },
	];

	return (
		<>
			<Routes>
				<Route path="kelly"
					element={<ProductionItem
						title='KELLY'
						description=""
						specs={kelly_specs}
						images={kelly_img} />}
				/>

				<Route path="lama"
					element={<ProductionItem
						title='LAMA'
						description="Tahta ar paceļamo mehānismu.Paredzēta ikdienas lietošanai. Guļamvieta veido taisnu virsmu .Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Ka priekšrocība ir veļas kastes esamība, kurš taisits no saplakšņa , mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={lama_specs}
						images={lama_img} />}
				/>

				<Route path="selga"
					element={<ProductionItem
						title='SELGA'
						description="Tahta ar paceļamo Lift mehānismu.Paredzēta ikdienas lietošanai. Guļamvieta veido taisnu virsmu .Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Tahta priekšrocība ir veļas kaste, kurš taisits no saplakšņa un mēbeļu lamināta."
						specs={selga_specs}
						images={selga_img} />}
				/>

				<Route path="tahta1"
					element={<ProductionItem
						title='TAHTA 1'
						description="Tahta ar paceļamo Lift mehānismu.Paredzēta ikdienas lietošanai. Guļamvieta veido taisnu virsmu .Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Tahta priekšrocība ir veļas kaste, kurš taisits no saplakšņa un mēbeļu lamināta."
						specs={tahta1_specs}
						images={tahta1_img} />}
				/>
			</Routes>
		</>
	);
}
