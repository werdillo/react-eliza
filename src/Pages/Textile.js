import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from "react-helmet";
import '../assets/scss/_textile.scss';

// eco-leather
import Cayenne from "../assets/images/textile/eco-leather/cayenne.jpeg"
import Sioux from "../assets/images/textile/eco-leather/sioux.jpeg"
import Torres from "../assets/images/textile/eco-leather/Torres.jpeg"
import Wave from "../assets/images/textile/eco-leather/Wave.jpeg"

// leather-imitation
import bison from "../assets/images/textile/leather-imitation/bison.jpeg"
import ranger from "../assets/images/textile/leather-imitation/ranger.jpeg"
import salvador from "../assets/images/textile/leather-imitation/salvador.jpeg"
import tobago from "../assets/images/textile/leather-imitation/tobago.jpeg"

import bloom from "../assets/images/textile/microfiber/bloom.jpeg"
import matrix from "../assets/images/textile/microfiber/matrix.jpeg"
import suedine from "../assets/images/textile/microfiber/suedine.jpeg"
import trend from "../assets/images/textile/microfiber/trend.jpeg"

import falcone from "../assets/images/textile/structural-fabric/falcone.jpeg"
import fusion from "../assets/images/textile/structural-fabric/fusion.jpeg"
import luna from "../assets/images/textile/structural-fabric/luna.jpeg"
import Magnum from "../assets/images/textile/structural-fabric/Magnum.jpeg"

import amore from "../assets/images/textile/velour/amore.jpeg"
import gordon from "../assets/images/textile/velour/gordon.jpeg"
import Tiffany from "../assets/images/textile/velour/Tiffany.jpeg"
import vogue from "../assets/images/textile/velour/vogue.jpeg"

// flock
import Pia from "../assets/images/textile/flock/pia.jpeg"

function TextileItem(props) {
	return (
		<Col xs={6} sm={6} lg={3}>
			<div className='-item'>
				<img className='-img' alt='' src={props.img}></img>
				<span className="-text">{props.text}</span>
			</div>
		</Col>
	)
}

export default function Textile() {
  
  return (
	  <Container fluid className="textile">
			<Helmet>
				<title>textile</title>
				<meta name="description" content="Eliza-k textile" />
  				<meta name="keywords" content="eliza, eliza-k, textile" />
			</Helmet>
			<Row>
				<p className='-title'>Microfiber</p>
				<TextileItem img={bloom} text="Bloom" />
				<TextileItem img={matrix} text="Matrix" />
				<TextileItem img={suedine} text="Suedine" />
				<TextileItem img={trend} text="Trend" />
				<p className='-title'>Structural fabric</p>
				<TextileItem img={falcone} text="Falcone" />
				<TextileItem img={fusion} text="Fusion" />
				<TextileItem img={luna} text="Luna" />
				<TextileItem img={Magnum} text="Magnum" />
				<p className='-title'>Leather imitation fabric</p>
				<TextileItem img={bison} text="Bison" />
				<TextileItem img={ranger} text="Ranger" />
				<TextileItem img={salvador} text="Salvador" />
				<TextileItem img={tobago} text="Tobago" />
				<p className='-title'>Velour</p>
				<TextileItem img={amore} text="Amore" />
				<TextileItem img={gordon} text="Gordon" />
				<TextileItem img={Tiffany} text="Tiffany" />
				<TextileItem img={vogue} text="Vogue" />
				<p className='-title'>Eco leather</p>
				<TextileItem img={Cayenne} text="Cayenne" />
				<TextileItem img={Sioux} text="Sioux" />
				<TextileItem img={Torres} text="Torres" />
				<TextileItem img={Wave} text="Wave" />
				<p className='-title'>Flock</p>
				<TextileItem img={Pia} text="Pia" />
			</Row>
		</Container>
  )
}
