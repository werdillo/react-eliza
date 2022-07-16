import React from 'react';
import '../../App.css';
import { Route, Routes } from 'react-router-dom';

import ProductionItem from '../../Components/ProductionItem';
export default function BedsDetails() {
	const daniela_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Laminēta kokskaidu plātne, dabīgskoks, porolons, sintepons, lameles gultai", },
		
	];
	const daniela_img = [
		{ src: require("../../assets/images/production/beds/daniela/daniela_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/beds/daniela/daniela_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/beds/daniela/daniela_3.png"), title: "img3" },
	];

	const gala_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Laminēta kokskaidu plātne, dabīgskoks, porolons, sintepons, lameles gultai", },
	];
	const gala_img = [
		{ src: require("../../assets/images/production/beds/gala/gala_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/beds/gala/gala_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/beds/gala/gala_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/beds/gala/gala_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/beds/gala/gala_5.png"), title: "img5" },
	];

	const kvest_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Laminēta kokskaidu plātne, dabīgskoks, porolons, sintepons, lameles gultai", },
		
	];
	const kvest_img = [
		{ src: require("../../assets/images/production/beds/kvest/kvest_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/beds/kvest/kvest_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/beds/kvest/kvest_3.png"), title: "img3" },
	];

	const lanai_specs = [
		{ title: "Karkass", content: "izgatavots no masīvkoka, lamināta un saplākšņa detaļām." },
		{ title: "Mīkstās daļas", content: "no formas noturoša elastīga putu-poliuretāna + poliestera šķiedra.", },
		{ title: "Pamats", content: "lameles / paceļamais mehānisms (pneumo-mehānisms) / veļas kasti.", },
		{ title: "Gultas apdare", content: "audums / āda.", },
		{ title: "Kājas", content: "koka / hromētas.", },
		{ title: "", content: "Integrēta sistēma “Bonnell”- atsperes", },
		{ title: "", content: "Iespēja regulēt matrača augstumu.", },
		{ title: "", content: "Iespējami dažādi pamata augstumi.", },
		{ title: "", content: "Iespējamas dažādas pamats + galvgalis kombinācijas.", },
		
	];
	const lanai_img = [
		{ src: require("../../assets/images/production/beds/lanai/lanai_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/beds/lanai/lanai_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/beds/lanai/lanai_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/beds/lanai/lanai_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/beds/lanai/lanai_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/beds/lanai/lanai_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/beds/lanai/lanai_7.png"), title: "img7" },
	];

	const lissi_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Laminēta kokskaidu plātne, dabīgskoks, porolons, sintepons, lameles gultai", },
	];
	const lissi_img = [
		{ src: require("../../assets/images/production/beds/lissi/lissi_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/beds/lissi/lissi_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/beds/lissi/lissi_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/beds/lissi/lissi_4.png"), title: "img4" },
	];

	const melene_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Laminēta kokskaidu plātne, dabīgskoks, porolons, sintepons, lameles gultai", },
	];
	const melene_img = [
		{ src: require("../../assets/images/production/beds/melene/melene_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/beds/melene/melene_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/beds/melene/melene_3.png"), title: "img3" },
	];


	const pointbreak_specs = [
		{ title: "Karkass", content: "izgatavots no masīvkoka, lamināta un saplākšņa detaļām." },
		{ title: "Mīkstās daļas", content: "no formas noturoša elastīga putu-poliuretāna + poliestera šķiedra.", },
		{ title: "Pamats", content: "lameles / paceļamais mehānisms (pneumo-mehānisms) / veļas kasti.", },
		{ title: "Gultas apdare", content: "audums / āda.", },
		{ title: "Kājas", content: "koka / hromētas.", },
		{ title: "", content: "Integrēta sistēma “Bonnell”- atsperes", },
		{ title: "", content: "Iespēja regulēt matrača augstumu.", },
		{ title: "", content: "Iespējami dažādi pamata augstumi.", },
		{ title: "", content: "Iespējamas dažādas pamats + galvgalis kombinācijas.", },

	];
	const pointbreak_img = [
		{ src: require("../../assets/images/production/beds/pointbreak/pointbreak_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/beds/pointbreak/pointbreak_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/beds/pointbreak/pointbreak_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/beds/pointbreak/pointbreak_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/beds/pointbreak/pointbreak_5.png"), title: "img5" },
	];


	const tossa_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
	];
	const tossa_img = [
		{ src: require("../../assets/images/production/beds/tossa/tossa_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/beds/tossa/tossa_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/beds/tossa/tossa_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/beds/tossa/tossa_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/beds/tossa/tossa_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/beds/tossa/tossa_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/beds/tossa/tossa_7.png"), title: "img7" },
	];

	return (
		<>
			<Routes>
				<Route path="daniela"
					element={<ProductionItem
						title='DANIELA'
						description=""
						specs={daniela_specs}
						images={daniela_img} />}
				/>
				<Route path="gala"
					element={<ProductionItem
						title='GALA'
						description=""
						specs={gala_specs}
						images={gala_img} />}
				/>
				<Route path="kvest"
					element={<ProductionItem
						title='KVEST'
						description=""
						specs={kvest_specs}
						images={kvest_img} />}
				/>
				<Route path="lanai"
					element={<ProductionItem
						title='LANAI'
						description="Gulta var būt standarta izmēros: 200*180, 200*160, 200*140 cm."
						specs={lanai_specs}
						images={lanai_img} />}
				/>
				<Route path="lissi"
					element={<ProductionItem
						title='LISSI'
						description=""
						specs={lissi_specs}
						images={lissi_img} />}
				/>
				<Route path="melene"
					element={<ProductionItem
						title='MELENE'
						description=""
						specs={melene_specs}
						images={melene_img} />}
				/>
				<Route path="pointbreak"
					element={<ProductionItem
						title='POINTBREAK'
						description="Gulta var būt standarta izmēros: 200*180, 200*160, 200*140 cm."
						specs={pointbreak_specs}
						images={pointbreak_img} />}
				/>
				<Route path="tossa"
					element={<ProductionItem
						title='TOSSA'
						description=""
						specs={tossa_specs}
						images={tossa_img} />}
				/>

			</Routes>

		</>
	);
}
