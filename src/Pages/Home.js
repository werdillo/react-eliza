import React from 'react';
import SimpleSlider from "../Components/SimpleSlider";
import { Helmet } from "react-helmet";

export default function Home() {
	return (
		<>
			<Helmet>
				<title>Eliza-k</title>
				<meta name="description" content="Eliza-k home page" />
  				<meta name="keywords" content="eliza, eliza-k, home" />
			</Helmet>
			<SimpleSlider />
		</>
	)
}