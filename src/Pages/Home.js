import React from 'react';
import '../App.css';
// components
import SimpleSlider from "../Components/SimpleSlider";
import Awards from "../Components/Awards";
import Map from "../Components/Map";
import ProductList from "../Components/ProductList";
import TextBlock from "../Components/TextBlock";
import MiniSlider from "../Components/MiniSlider";

export default function Home() {
	return (
		<>
			<SimpleSlider />
			{/* <TextBlock header="Izsmalcinātas mēbeles jūsu gaumei" text="Mēbeļu ražošana pēc individuāla pasūtījuma, kā arī plašs gatavās produkcijas klāsts" />
			<ProductList />
			<TextBlock header="Individuāla pieeja" text="Piedāvājam saviem pircējiem iespēju veikt nestandarta pasūtījumus. Šādu pasūtījumu veikšanas termiņš ir 1 - 2 mēneši." />
			<MiniSlider />
			<Map /> */}
			<Awards />
		</>
	)
}