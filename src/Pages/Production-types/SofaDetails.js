import React from 'react';
import '../../App.css';
import { Route, Routes } from 'react-router-dom';

// files
import altitude_size from '../../assets/Files/Products/sofas/altitude.pdf'
import channel_size from '../../assets/Files/Products/sofas/channel.pdf'
import duke_size from '../../assets/Files/Products/sofas/duke.pdf'
import frontSide_size from '../../assets/Files/Products/sofas/frontSide.pdf'
import hanapepe_size from '../../assets/Files/Products/sofas/hanapepe.pdf'
import keala_size from '../../assets/Files/Products/sofas/keala.pdf'
import maverick_size from '../../assets/Files/Products/sofas/maverick.pdf'
import summerSwell_size from '../../assets/Files/Products/sofas/summerSwell.pdf'

import ProductionItem from '../../Components/ProductionItem';
export default function SofaDetails() {
	const aerial_specs = [
		{title: "Gulēšanas funkcija", content: "nav"},
		{title: "Veļas kaste", content: "nav",},
		{title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, elastīga gumija, sintepons",},
		{title: "Sēde/sēdes pilveni", content: "Porolons, sintepons"},
		{title: "Muguras spilveni", content: "Porolons, sintepons"},
		{title: "Dīvāna apdare", content: "audums / āda"},
		{title: "Kājas", content: "koka / hromētas"}
	];
	const aerial_img = [
		{ src: require("../../assets/images/production/sofas/aerial/aerial_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofas/aerial/aerial_2.png"), title: "img2" },
	];

	const altitude_specs = [
		{title: "Gulēšanas funkcija", content: "nav"},
		{title: "Veļas kaste", content: "nav",},
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, elastīga gumija, sintepons",},
		{title: "Sēde/sēdes pilveni", content: "Porolons, sintepons"},
		{ title: "Muguras spilveni", content: "Sintepona vate + spalvas"},
		{title: "Dīvāna apdare", content: "audums / āda"},
		{ title: "Kājas", content: "hromētas"}
	];
	const altitude_img = [
		{ src: require("../../assets/images/production/sofas/altitude/altitude_1.png"), title: "img1" },
	];

	const backton_specs = [
		{title: "Gulēšanas funkcija", content: "nav"},
		{title: "Veļas kaste", content: "nav",},
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, elastīga gumija, sintepons",},
		{title: "Sēde/sēdes pilveni", content: "Porolons, sintepons"},
		{ title: "Muguras spilveni", content: "Sintepona vate + spalvas"},
		{title: "Dīvāna apdare", content: "audums / āda"},
		{ title: "Kājas", content: "hromētas"}
	];
	const backton_img = [
		{ src: require("../../assets/images/production/sofas/backton/backton_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofas/backton/backton_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofas/backton/backton_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofas/backton/backton_4.png"), title: "img4" },
	];

	const baja_specs = [
		{ title: "Gulēšanas funkcija", content: "nav"},
		{ title: "Veļas kaste", content: "nav",},
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, zig-zag atsperes, sintepons",},
		{ title: "Sēde/sēdes pilveni", content: "Porolons, sintepons"},
		{ title: "Muguras spilveni", content: "Porolons, sintepons"},
		{ title: "Dīvāna apdare", content: "audums / āda"},
		{ title: "Kājas", content: "koka / hromētas"}
	];
	const baja_img = [
		{ src: require("../../assets/images/production/sofas/baja/baja_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofas/baja/baja_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofas/baja/baja_3.png"), title: "img3" },
	];
	
	const channel_specs = [
		{ title: "Gulēšanas funkcija", content: "nav"},
		{ title: "Veļas kaste", content: "nav",},
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, zig-zag atsperes, sintepons",},
		{ title: "Sēde/sēdes pilveni", content: "Porolons, spalvas, sintepons"},
		{ title: "Muguras spilveni", content: "Sintepona vate + spalvas"},
		{ title: "Dīvāna apdare", content: "audums / āda"},
		{ title: "Kājas", content: "koka / hromētas"}
	];
	const channel_img = [
		{ src: require("../../assets/images/production/sofas/channel/channel_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofas/channel/channel_2.png"), title: "img2" },
	];
	
	const duke_specs = [
		{ title: "Gulēšanas funkcija", content: "nav"},
		{ title: "Veļas kaste", content: "nav",},
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, plastmasa lameles, metāla rāmis",},
		{ title: "Sēde/sēdes pilveni", content: "Atmiņas putu porolons, porolons, sintepons"},
	];
	const duke_img = [
		{ src: require("../../assets/images/production/sofas/duke/duke_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofas/duke/duke_2.png"), title: "img2" },
	];

	const frontSide_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, porolons, elastīga gumija, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, sintipona vate+spalvas, sintepona sega" },
		{ title: "Muguras spilveni", content: "Sintepona vate + spalvas" },
		{ title: "Dīvāna apdare", content: "audums / āda" },
		{ title: "Kājas", content: "koka / hromētas" }
	];
	const frontSide_img = [
		{ src: require("../../assets/images/production/sofas/frontSide/frontSide_1.png"), title: "img1" },
	];


	const hanapepe_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, zig-zag atsperes, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, spalvas, sintepons" },
		{ title: "Muguras spilveni", content: "Sintepona vate + spalvas" },
		{ title: "Dīvāna apdare", content: "audums / āda" },
		{ title: "Kājas", content: "koka / hromētas" }
	];
	const hanapepe_img = [
		{ src: require("../../assets/images/production/sofas/hanapepe/hanapepe_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofas/hanapepe/hanapepe_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofas/hanapepe/hanapepe_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofas/hanapepe/hanapepe_4.png"), title: "img4" },
	];

	const keala_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, zig-zag atsperes, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, spalvas, sintepons" },
		{ title: "Dīvāna apdare", content: "audums / āda" },
		{ title: "Kājas", content: "koka / hromētas" }
	];
	const keala_img = [
		{ src: require("../../assets/images/production/sofas/keala/keala_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofas/keala/keala_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofas/keala/keala_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofas/keala/keala_4.png"), title: "img4" },
	];

	const maverick_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, zig-zag atsperes, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, sintepons" },
		{ title: "Muguras spilveni", content: "Sintepona vate" },
		{ title: "Dīvāna apdare", content: "audums / āda" },
		{ title: "Kājas", content: "koka / hromētas" }
	];
	const maverick_img = [
		{ src: require("../../assets/images/production/sofas/maverick/maverick_1.png"), title: "img1" },
	];


	const padington_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, zig-zag atsperes, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, sintepons" },
		{ title: "Muguras spilveni", content: "Sintepona vate" },
		{ title: "Dīvāna apdare", content: "audums / āda" },
		{ title: "Kājas", content: "koka / hromētas" }
	];
	const padington_img = [
		{ src: require("../../assets/images/production/sofas/padington/padington_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofas/padington/padington_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofas/padington/padington_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofas/padington/padington_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofas/padington/padington_5.png"), title: "img5" },
	];



	const polo_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kartons, porolons, elastīga gumija", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons" },
	];
	const polo_img = [
		{ src: require("../../assets/images/production/sofas/polo/polo_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofas/polo/polo_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofas/polo/polo_3.png"), title: "img3" },
	];
	const spencer_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kartons, porolons, elastīga gumija", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons" },
	];
	const spencer_img = [
		{ src: require("../../assets/images/production/sofas/spencer/spencer_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofas/spencer/spencer_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofas/spencer/spencer_3.png"), title: "img3" },
	];


	const summerSwell_specs = [
		{ title: "Gulēšanas funkcija", content: "nav" },
		{ title: "Veļas kaste", content: "nav", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, zig-zag atsperes, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, sintepons" },
		{ title: "Muguras spilveni", content: "Sintepona vate" },
		{ title: "Dīvāna apdare", content: "audums / āda" },
		{ title: "Kājas", content: "koka / hromētas / koka rāmis" }
	];
	const summerSwell_img = [
		{ src: require("../../assets/images/production/sofas/summerSwell/summerSwell_1.png"), title: "img1" },
	];



	

	return (
		<>
			<Routes>
				<Route path="aerial"
					element={<ProductionItem 
					title='AERIAL'
					description="Мoduļu dīvāns, kurā ietilpst neatkarīgi elementi ar savu karkasu, kurus var izvietot neatkarīgi vienu no otra, vai ari salikt vienotā – veselā kompozīcijā. Iespējami dažādi moduļu izmeri un modifikācijas. Dīvāna moduļi ļauj izveidot nepieciešamo komplektāciju un individuālu atpūtas telpu."
					specs={aerial_specs}
					images={aerial_img} />}
				/>
				<Route path="altitude"
					element={<ProductionItem 
					title='ALTITUDE'
					description="Мoduļu dīvāns, kurā ietilpst neatkarīgī elementi ar savu karkasu , kurus var izvietot neatkarīgi vienu no otra, vai ari salikt vienotā – veselā kompozīcijā. Iespējami dažādi moduļu izmeri un modifikācijas. ALTITUDE Dīvāna moduļi ļauj izveidot nepieciešamo komplektāciju un individuālu atpūtas telpu."
					specs={altitude_specs}
					images={altitude_img}
					file={altitude_size} />}
				/>
				<Route path="backton"
					element={<ProductionItem 
					title='BACKTON'
					description=""
					specs={backton_specs}
					images={backton_img} />}
				/>
				<Route path="baja"
					element={<ProductionItem 
					title='BAJA'
					description="Dīvānam iespējama kombinācija ar krēslu. Der gan ofisiem gan dzīvojamam telpām."
					specs={baja_specs}
					images={baja_img} />}
				/>
				<Route path="channel"
					element={<ProductionItem 
					title='CHANNEL'
					description="Мoduļu dīvāns, kurā ietilpst neatkarīgī elementi ar savu karkasu , kurus var izvietot neatkarīgi vienu no otra, vai ari salikt vienotā – veselā kompozīcijā. Iespējami dažādi moduļu izmeri un modifikācijas. CHANNEL Dīvāna moduļi ļauj izveidot nepieciešamo komplektāciju un individuālu atpūtas telpu."
					specs={channel_specs}
					images={channel_img}
					file={channel_size} />}
				/>
				<Route path="duke"
					element={<ProductionItem 
					title='DUKE'
					description=""
					specs={duke_specs}
					images={duke_img} 
					file={duke_size} />}
				/>
				<Route path="frontSide"
					element={<ProductionItem 
					title='FRONT-SIDE'
					description="Мoduļu dīvāns, kurā ietilpst neatkarīgī elementi ar savu karkasu , kurus var izvietot neatkarīgi vienu no otra, vai ari salikt vienotā – veselā kompozīcijā. Iespējami dažādi moduļu izmeri un modifikācijas FRONT-SIDE Dīvāna moduļi ļauj izveidot nepieciešamo komplektāciju un individuālu atpūtas telpu."
					specs={frontSide_specs}
					images={frontSide_img}
					file={frontSide_size} />}
				/>
				<Route path="hanapepe"
					element={<ProductionItem
					title='HANAPEPE'
					description="Мoduļu dīvāns, kurā ietilpst neatkarīgī elementi ar savu karkasu , kurus var izvietot neatkarīgi vienu no otra, vai ari salikt vienotā – veselā kompozīcijā. Iespējami dažādi moduļu izmeri un modifikācijas. Dīvāna HANAPEPE moduļi ļauj izveidot nepieciešamo komplektāciju un individuālu atpūtas telpu."
					specs={hanapepe_specs}
					images={hanapepe_img}
					file={hanapepe_size} />}
				/>
				<Route path="keala"
					element={<ProductionItem
					title='KEALA'
					description="Мoduļu dīvāns, kurā ietilpst neatkarīgī elementi ar savu karkasu , kurus var izvietot neatkarīgi vienu no otra, vai ari salikt vienotā – veselā kompozīcijā. Iespējami dažādi moduļu izmeri un modifikācijas. KEALA Dīvāna moduļi ļauj izveidot nepieciešamo komplektāciju un individuālu atpūtas telpu."
					specs={keala_specs}
					images={keala_img}
					file={keala_size} />}
				/>
				<Route path="maverick"
					element={<ProductionItem
					title='MAVERICK'
					description="Мoduļu dīvāns, kurā ietilpst neatkarīgī elementi ar savu karkasu , kurus var izvietot neatkarīgi vienu no otra, vai ari salikt vienotā – veselā kompozīcijā. Iespējami dažādi moduļu izmeri un modifikācijas. MAVERIECK Dīvāna moduļi ļauj izveidot nepieciešamo komplektāciju un individuālu atpūtas telpu."
					specs={maverick_specs}
					images={maverick_img} 
					file={maverick_size} />}
				/>

				<Route path="padington"
					element={<ProductionItem
					title='PADINGTON'
					description=""
					specs={padington_specs}
					images={padington_img} />}
				/>

				<Route path="polo"
					element={<ProductionItem
					title='POLO'
					description=""
					specs={polo_specs}
					images={polo_img} />}
				/>
				<Route path="spencer"
					element={<ProductionItem
					title='SPENCER'
					description=""
					specs={spencer_specs}
					images={spencer_img} />}
				/>
				<Route path="summerSwell"
					element={<ProductionItem
					title='SUMMER SWELL'
					description="Мoduļu dīvāns, kurā ietilpst neatkarīgī elementi ar savu karkasu , kurus var izvietot neatkarīgi vienu no otra, vai ari salikt vienotā – veselā kompozīcijā. Iespējami dažādi moduļu izmeri un modifikācijas. SUMMER SWELL Dīvāna moduļi ļauj izveidot nepieciešamo komplektāciju un individuālu atpūtas telpu."
					specs={summerSwell_specs}
					images={summerSwell_img}
					file={summerSwell_size} />}
				/>
					
			</Routes>

		</>
	);
}
