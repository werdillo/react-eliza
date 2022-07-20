import React from 'react';
import '../../App.css';
import { Route, Routes } from 'react-router-dom';

// files
import alberts_size from '../../assets/Files/Products/sofa-beds/alberts.pdf'
import alegro_size from '../../assets/Files/Products/sofa-beds/alegro.pdf'
import argo_size from '../../assets/Files/Products/sofa-beds/argo.pdf'
import astoria_size from '../../assets/Files/Products/sofa-beds/astoria.pdf'
import barbara_size from '../../assets/Files/Products/sofa-beds/barbara.pdf'
import boston_size from '../../assets/Files/Products/sofa-beds/boston.pdf'
import dora_size from '../../assets/Files/Products/sofa-beds/dora.pdf'
import elefant_size from '../../assets/Files/Products/sofa-beds/elefant.pdf'
import favorits_size from '../../assets/Files/Products/sofa-beds/favorits.pdf'
import filippa_size from '../../assets/Files/Products/sofa-beds/filippa.pdf'

import flamingo_size from '../../assets/Files/Products/sofa-beds/flamingo.pdf'
import florida_size from '../../assets/Files/Products/sofa-beds/florida.pdf'
import graffiti_size from '../../assets/Files/Products/sofa-beds/graffiti.pdf'
import hilton_size from '../../assets/Files/Products/sofa-beds/hilton.pdf'
import lionNT_size from '../../assets/Files/Products/sofa-beds/lionNT.pdf'
import lionNTplus_size from '../../assets/Files/Products/sofa-beds/lionNTplus.pdf'
import lusso_size from '../../assets/Files/Products/sofa-beds/lusso.pdf'
import malta_size from '../../assets/Files/Products/sofa-beds/malta.pdf'
import milan_size from '../../assets/Files/Products/sofa-beds/milan.pdf'
import nica_size from '../../assets/Files/Products/sofa-beds/nica.pdf'

import nord_size from '../../assets/Files/Products/sofa-beds/nord.pdf'
import ricards_size from '../../assets/Files/Products/sofa-beds/ricards.pdf'
import roma_size from '../../assets/Files/Products/sofa-beds/roma.pdf'
import spriditis_size from '../../assets/Files/Products/sofa-beds/spriditis.pdf'
import turin_size from '../../assets/Files/Products/sofa-beds/turin.pdf'
import vena_size from '../../assets/Files/Products/sofa-beds/vena.pdf'
import verona_size from '../../assets/Files/Products/sofa-beds/verona.pdf'

import ProductionItem from '../../Components/ProductionItem';
export default function SofaBedsDetails() {
	// 28 products 
	const alberts_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons" },
		{ title: "Muguras spilveni", content: "Sintipons" },
	];
	const alberts_img = [
		{ src: require("../../assets/images/production/sofa-beds/alberts/alberts_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/alberts/alberts_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/alberts/alberts_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/alberts/alberts_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/alberts/alberts_5.png"), title: "img5" },
	];

	const alegro_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare ", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas ", content: "plastmasas" },
	];
	const alegro_img = [
		{ src: require("../../assets/images/production/sofa-beds/alegro/alegro_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/alegro/alegro_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/alegro/alegro_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/alegro/alegro_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/alegro/alegro_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/alegro/alegro_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/alegro/alegro_7.png"), title: "img7" },
	];

	const argo_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
	];
	const argo_img = [
		{ src: require("../../assets/images/production/sofa-beds/argo/argo_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/argo/argo_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/argo/argo_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/argo/argo_4.png"), title: "img4" },
	];

	const astoria_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
	];
	const astoria_img = [
		{ src: require("../../assets/images/production/sofa-beds/astoria/astoria_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/astoria/astoria_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/astoria/astoria_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/astoria/astoria_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/astoria/astoria_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/astoria/astoria_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/astoria/astoria_7.png"), title: "img7" },
		{ src: require("../../assets/images/production/sofa-beds/astoria/astoria_8.png"), title: "img8" },
	];

	const barbara_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
	];
	const barbara_img = [
		{ src: require("../../assets/images/production/sofa-beds/barbara/barbara_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/barbara/barbara_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/barbara/barbara_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/barbara/barbara_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/barbara/barbara_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/barbara/barbara_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/barbara/barbara_7.png"), title: "img7" },
		{ src: require("../../assets/images/production/sofa-beds/barbara/barbara_8.png"), title: "img8" },
		{ src: require("../../assets/images/production/sofa-beds/barbara/barbara_9.png"), title: "img9" },
	]

	const boston_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
	];
	const boston_img = [
		{ src: require("../../assets/images/production/sofa-beds/boston/boston_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/boston/boston_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/boston/boston_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/boston/boston_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/boston/boston_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/boston/boston_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/boston/boston_7.png"), title: "img7" },
		{ src: require("../../assets/images/production/sofa-beds/boston/boston_8.png"), title: "img8" },
	];


	const elefantMN_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare ", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas ", content: "koka" },
	];
	const elefantMN_img = [
		{ src: require("../../assets/images/production/sofa-beds/elefantMN/elefantMN_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/elefantMN/elefantMN_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/elefantMN/elefantMN_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/elefantMN/elefantMN_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/elefantMN/elefantMN_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/elefantMN/elefantMN_6.png"), title: "img6" },
		
	];


	const dora_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare ", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas ", content: "plastmasas" },
	];
	const dora_img = [
		{ src: require("../../assets/images/production/sofa-beds/dora/dora_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/dora/dora_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/dora/dora_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/dora/dora_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/dora/dora_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/dora/dora_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/dora/dora_7.png"), title: "img7" },
	];


	const favorits_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons" },
		{ title: "Dīvāna apdare ", content: "iespējami dažādu audumu un krāsu varianti" },
	];
	const favorits_img = [
		{ src: require("../../assets/images/production/sofa-beds/favorits/favorits_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/favorits/favorits_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/favorits/favorits_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/favorits/favorits_4.png"), title: "img4" },
		
	];

	const filippa_specs = [
		{ title: "Karkass", content: "izgatavots no masīvkoka, sēdes daļā iestrādātas Zig-Zag atsperes." },
		{ title: "Pildījums", content: "formas noturošs elastīgs putu-poliuretāns, noturīgs pret dinamisku slodzi.", },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti.", },
		{ title: "Kājas", content: "koka" },
	];
	const filippa_img = [
		{ src: require("../../assets/images/production/sofa-beds/filippa/filippa_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/filippa/filippa_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/filippa/filippa_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/filippa/filippa_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/filippa/filippa_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/filippa/filippa_6.png"), title: "img6" },
		
	];

	const flamingo_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare ", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas ", content: "plastmasas" },
	];
	const flamingo_img = [
		{ src: require("../../assets/images/production/sofa-beds/flamingo/flamingo_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/flamingo/flamingo_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/flamingo/flamingo_3.png"), title: "img3" },
		
	];

	const florida_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
	];
	const florida_img = [
		{ src: require("../../assets/images/production/sofa-beds/florida/florida_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/florida/florida_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/florida/florida_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/florida/florida_4.png"), title: "img4" },
		
	];


	const graffiti_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, zig-zag atsperes, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Zig-zag atsperes, porolons" },
		{ title: "Muguras spilveni", content: "Sintipons" },
	];
	const graffiti_img = [
		{ src: require("../../assets/images/production/sofa-beds/graffiti/graffiti_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/graffiti/graffiti_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/graffiti/graffiti_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/graffiti/graffiti_4.png"), title: "img4" },
		
	];

	const hilton_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, zig-zag atsperes, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const hilton_img = [
		{ src: require("../../assets/images/production/sofa-beds/hilton/hilton_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/hilton/hilton_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/hilton/hilton_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/hilton/hilton_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/hilton/hilton_5.png"), title: "img5" },
		
	];

	const lionNT_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, zig-zag atsperes, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const lionNT_img = [
		{ src: require("../../assets/images/production/sofa-beds/lionNT/lionNT_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/lionNT/lionNT_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/lionNT/lionNT_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/lionNT/lionNT_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/lionNT/lionNT_5.png"), title: "img5" },
	];

	const lionNTplus_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, zig-zag atsperes, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const lionNTplus_img = [
		{ src: require("../../assets/images/production/sofa-beds/lionNTplus/lionNTplus_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/lionNTplus/lionNTplus_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/lionNTplus/lionNTplus_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/lionNTplus/lionNTplus_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/lionNTplus/lionNTplus_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/lionNTplus/lionNTplus_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/lionNTplus/lionNTplus_7.png"), title: "img7" },
	];

	const lusso_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, kokskaidu plātne, kartons, porolons, zig-zag atsperes, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, sintepons" },
		{ title: "Muguras spilveni", content: "Sintepona vate" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const lusso_img = [
		{ src: require("../../assets/images/production/sofa-beds/lusso/lusso_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/lusso/lusso_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/lusso/lusso_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/lusso/lusso_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/lusso/lusso_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/lusso/lusso_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/lusso/lusso_7.png"), title: "img7" },
	];

	const malta_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, atsperes bloks, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const malta_img = [
		{ src: require("../../assets/images/production/sofa-beds/malta/malta_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/malta/malta_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/malta/malta_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/malta/malta_4.png"), title: "img4" },
	];

	const michelle_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Laminēta kokskaidu plātne, kokšķiedru plātne, dīvāns-gulta metāla rāmis, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons, sintepons" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "plastmasas" },
	];
	const michelle_img = [
		{ src: require("../../assets/images/production/sofa-beds/michelle/michelle_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/michelle/michelle_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/michelle/michelle_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/michelle/michelle_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/michelle/michelle_5.png"), title: "img5" },
	];

	const milan_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const milan_img = [
		{ src: require("../../assets/images/production/sofa-beds/milan/milan_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/milan/milan_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/milan/milan_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/milan/milan_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/milan/milan_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/milan/milan_6.png"), title: "img6" },
	];


	const nica_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const nica_img = [
		{ src: require("../../assets/images/production/sofa-beds/nica/nica_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/nica/nica_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/nica/nica_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/nica/nica_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/nica/nica_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/nica/nica_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/nica/nica_7.png"), title: "img7" },
	];


	const nord_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons" },
		{ title: "Dīvāna apdare", content: "audums" },
	];
	const nord_img = [
		{ src: require("../../assets/images/production/sofa-beds/nord/nord_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/nord/nord_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/nord/nord_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/nord/nord_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/nord/nord_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/nord/nord_6.png"), title: "img6" },
	];

	const ricards_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const ricards_img = [
		{ src: require("../../assets/images/production/sofa-beds/ricards/ricards_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/ricards/ricards_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/ricards/ricards_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/ricards/ricards_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/ricards/ricards_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/ricards/ricards_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/ricards/ricards_7.png"), title: "img7" },
	];

	const roma_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const roma_img = [
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_7.png"), title: "img7" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_8.png"), title: "img8" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_9.png"), title: "img9" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_10.png"), title: "img10" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_11.png"), title: "img11" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_12.png"), title: "img12" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_13.png"), title: "img13" },
		{ src: require("../../assets/images/production/sofa-beds/roma/roma_14.png"), title: "img14" },
		
	];


	const spriditis_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const spriditis_img = [
		{ src: require("../../assets/images/production/sofa-beds/spriditis/spriditis_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/spriditis/spriditis_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/spriditis/spriditis_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/spriditis/spriditis_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/spriditis/spriditis_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/spriditis/spriditis_6.png"), title: "img6" },
	];

	const turin_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const turin_img = [
		{ src: require("../../assets/images/production/sofa-beds/turin/turin_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/turin/turin_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/turin/turin_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/turin/turin_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/turin/turin_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/turin/turin_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/turin/turin_7.png"), title: "img7" },
	];


	const vena_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Atsperes bloks" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const vena_img = [
		{ src: require("../../assets/images/production/sofa-beds/vena/vena_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/vena/vena_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/vena/vena_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/vena/vena_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/vena/vena_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/vena/vena_6.png"), title: "img6" },
	];


	const verona_specs = [
		{ title: "Gulēšanas funkcija", content: "ir" },
		{ title: "Veļas kaste", content: "ir", },
		{ title: "Korpuss", content: "Dabīgskoks, saplāksnis, kokšķiedru plātne, porolons, sintepons", },
		{ title: "Sēde/sēdes pilveni", content: "Porolons" },
		{ title: "Muguras spilveni", content: "Sintipons" },
		{ title: "Dīvāna apdare", content: "iespējami dažādu audumu un krāsu varianti" },
		{ title: "Kājas", content: "koka" },
	];
	const verona_img = [
		{ src: require("../../assets/images/production/sofa-beds/verona/verona_1.png"), title: "img1" },
		{ src: require("../../assets/images/production/sofa-beds/verona/verona_2.png"), title: "img2" },
		{ src: require("../../assets/images/production/sofa-beds/verona/verona_3.png"), title: "img3" },
		{ src: require("../../assets/images/production/sofa-beds/verona/verona_4.png"), title: "img4" },
		{ src: require("../../assets/images/production/sofa-beds/verona/verona_5.png"), title: "img5" },
		{ src: require("../../assets/images/production/sofa-beds/verona/verona_6.png"), title: "img6" },
		{ src: require("../../assets/images/production/sofa-beds/verona/verona_7.png"), title: "img7" },
	];


	return (
		<>
			<Routes>
				<Route path="alberts"
					element={<ProductionItem
						title='ALBERTS'
						description=""
						specs={alberts_specs}
						images={alberts_img}
						file={alberts_size} />}
				/>
				<Route path="alegro"
					element={<ProductionItem
						title='ALEGRO'
						description="Dīvāns ar transformācijas mehānismu - lifts „Eiro-grāmata”. Paredzēts ikdienas lietošanai. Transformējot dīvānu, abas virsmas veido vienotu un taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks, vienkārši un ērti ekspluatējams. Dīvāna priekšrocības ir veļas kaste, kura taisīta no saplākšņa un mēbeļu lamināta, kā arī atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={alegro_specs}
						images={alegro_img}
						file={alegro_size} />}
				/>
				<Route path="argo"
					element={<ProductionItem
						title='ARGO'
						description=""
						specs={argo_specs}
						images={argo_img}
						file={argo_size} />}
				/>
				<Route path="astoria"
					element={<ProductionItem
						title='ASTORIA'
						description=""
						specs={astoria_specs}
						images={astoria_img}
						file={astoria_size} />}
				/>
				<Route path="barbara"
					element={<ProductionItem
						title='BARBARA'
						description=""
						specs={barbara_specs}
						images={barbara_img}
						file={barbara_size} />}
				/>
				<Route path="boston"
					element={<ProductionItem
						title='BOSTON'
						description=""
						specs={boston_specs}
						images={boston_img}
						file={boston_size} />}
				/>
				<Route path="dora"
					element={<ProductionItem
						title='DORA'
						description="Stūra dīvāns ar transformācijas mehānismu „Euro-grāmata”.Paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams.Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa, mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={dora_specs}
						images={dora_img}
						file={dora_size} />}
				/>
				<Route path="elefantMN"
					element={<ProductionItem
						title='ELEFANT MN'
						description="Dīvāns ar transformācijas mehānismu „Euro-grāmata”, paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa ,mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={elefantMN_specs}
						images={elefantMN_img}
						file={elefant_size} />}
				/>
				<Route path="favorits"
					element={<ProductionItem
						title='FAVORITS'
						description="Dīvāns izvelkams uz priekšu ar transformācijas mehānismu „Nord’.Paredzēts ikdienas lietošanai. Transformējot virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa un mēbeļu lamināta."
						specs={favorits_specs}
						images={favorits_img}
						file={favorits_size} />}
				/>
				<Route path="filippa"
					element={<ProductionItem
						title='FILIPPA'
						description="Stūra dīvāns, ar transformācijas mehānismu “Delfin”. Iiespējamas dažādas moduļu modifikācijas. Piespējams vaiants, gan ar mehanismu „Delfin, gan bez tā .Paredzēts ikdienas lietošanai. Transformējot virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa un mēbeļu lamināta."
						specs={filippa_specs}
						images={filippa_img}
						file={filippa_size} />}
				/>
				<Route path="flamingo"
					element={<ProductionItem
						title='FLAMINGO'
						description="Dīvāns ar transformācijas mehānismu „Eiro-grāmata”. Paredzēts ikdienas lietošanai. Transformējot dīvānu, abas virsmas veido vienotu un taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks, vienkārši un ērti ekspluatējams. Dīvāna priekšrocības ir veļas kaste, kura taisīta no saplākšņa un mēbeļu lamināta, kā arī atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={flamingo_specs}
						images={flamingo_img}
						file={flamingo_size} />}
				/>
				<Route path="florida"
					element={<ProductionItem
						title='FLORIDA'
						description=""
						specs={florida_specs}
						images={florida_img}
						file={florida_size} />}
				/>
				<Route path="graffiti"
					element={<ProductionItem
						title='GRAFFITI'
						description=""
						specs={graffiti_specs}
						images={graffiti_img}
						file={graffiti_size} />}
				/>
				<Route path="hilton"
					element={<ProductionItem
						title='HILTON'
						description="Dīvāns ar transformācijas mehānismu „Euro-grāmata”, paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa,mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={hilton_specs}
						images={hilton_img}
						file={hilton_size} />}
				/>
				<Route path="lionNT"
					element={<ProductionItem
						title='LION NT'
						description="Izvelkams stūra dīvāns paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa, mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={lionNT_specs}
						images={lionNT_img}
						file={lionNT_size} />}
				/>
				<Route path="lionNTplus"
					element={<ProductionItem
						title='LION NT+'
						description="Izvelkams stūra dīvāns paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa, mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={lionNTplus_specs}
						images={lionNTplus_img}
						file={lionNTplus_size} />}
				/>
				<Route path="lusso"
					element={<ProductionItem
						title='LUSSO'
						description="Stūra dīvāns, ar transformācijas mehānismu “Delfin”. Iiespējamas dažādas moduļu modifikācijas.Piespējams vaiants, gan ar mehanismu „Delfin, gan bez tā . Paredzēts ikdienas lietošanai. Transformējot virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa un mēbeļu lamināta."
						specs={lusso_specs}
						images={lusso_img}
						file={lusso_size} />}
				/>
				<Route path="malta"
					element={<ProductionItem
						title='MALTA'
						description="Dīvāns ar transformācijas mehānismu „Euro-grāmata”.Paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa, mēbeļu lamināta un atsperu bloks „Bonnell”,, kurš ir ilgmūžīgs."
						specs={malta_specs}
						images={malta_img}
						file={malta_size} />}
				/>
				<Route path="michelle"
					element={<ProductionItem
						title='MICHELLE'
						description="Dīvāns ar transformācijas mehānismu „Click-Clack”, paredzēts ikdienas lietošanai. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa un mēbeļu lamināta."
						specs={michelle_specs}
						images={michelle_img} />}
				/>
				<Route path="milan"
					element={<ProductionItem
						title='MILAN'
						description="Dīvāns izvelkams uz priekšu. Paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa, mēbeļu lamināta un atsperu bloks „Bonnell”,, kurš ir ilgmūžīgs."
						specs={milan_specs}
						images={milan_img}
						file={milan_size} />}
				/>
				<Route path="nica"
					element={<ProductionItem
						title='NICA'
						description="Dīvāns ar transformācijas mehānismu „Euro-grāmata”, paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa, mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={nica_specs}
						images={nica_img}
						file={nica_size} />}
				/>
				<Route path="nord"
					element={<ProductionItem
						title='NORD'
						description="Dīvāns izvelkams uz priekšu ar transformācijas mehānismu „Nord’.Paredzēts ikdienas lietošanai. Transformējot virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa un mēbeļu lamināta."
						specs={nord_specs}
						images={nord_img}
						file={nord_size} />}
				/>
				<Route path="ricards"
					element={<ProductionItem
						title='RICARDS'
						description="Stūra dīvāns ar transformācijas mehānismu „Euro-grāmata”. Paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa, mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={ricards_specs}
						images={ricards_img}
						file={ricards_size} />}
				/>
				<Route path="roma"
					element={<ProductionItem
						title='ROMA'
						description="Stūra dīvāns ar transformācijas mehānismu „Euro-grāmata”. Paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa, mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={roma_specs}
						images={roma_img}
						roma_size={roma_size} />}
				/>
				<Route path="spriditis"
					element={<ProductionItem
						title='SPRĪDĪTIS'
						description="Dīvāns izvelkams uz priekšu ar transformācijas mehānismu „Nord’.Paredzēts ikdienas lietošanai. Transformējot virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa un mēbeļu lamināta."
						specs={spriditis_specs}
						images={spriditis_img}
						file={spriditis_size} />}
				/>
				<Route path="turin"
					element={<ProductionItem
						title='TURIN'
						description="Stūra dīvāns, ar transformācijas mehānismu. Paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa, mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={turin_specs}
						images={turin_img}
						file={turin_size} />}
				/>
				<Route path="vena"
					element={<ProductionItem
						title='VENA'
						description="Dīvāns izvelkams uz priekšu. Paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa, mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={vena_specs}
						images={vena_img}
						file={vena_size} />}
				/>
				<Route path="verona"
					element={<ProductionItem
						title='VERONA'
						description="Dīvāns izvelkams uz priekšu.Paredzēts ikdienas lietošanai. Transformējot abas virsmas veido vienotu taisnu virsmu. Ideāli der gan gulēšanai, gan atpūtai. Komfortabls, ergonomisks un vienkārši ērti ekspluatējams. Dīvāna priekšrocība ir veļas kaste, kurš taisits no saplakšņa , mēbeļu lamināta un atsperu bloks „Bonnell”, kurš ir ilgmūžīgs."
						specs={verona_specs}
						images={verona_img}
						file={verona_size} />}
				/>

			</Routes>

		</>
	);
}
