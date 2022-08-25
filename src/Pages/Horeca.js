import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';

import hotel from "../assets/images/hoReCa/Ho.png";
import Cafe from "../assets/images/hoReCa/Ca.png";
import restaraunt from "../assets/images/hoReCa/Re.png";

function HorecaItem(props) {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<p className='horeca-header'>{props.header}</p>
						<p className='horeca-text'>{props.text}</p>
					</Col>
				</Row>
			</Container>
			
			<img className='horeca-img' rel='' alt='' src={props.img} />
		</>
	)
}

export default function Horeca() {
	return (
		<>
			<HorecaItem header="Viesnīcas" img={hotel} text="Mūsu uzņēmums nodarbojas ar augstākās kvalitātes mēbeļu izstrādi. Elīza mēbelēm piemīt ergonomika, ērtība, izturība, kā arī maksimāla atbilstība interjeram, kuram tās ir izveidotas."/>
			<HorecaItem header="Restorāni" img={restaraunt} text="Konkrētam interjeram mēs palīdzēsim izvēlēties atbilstoša stila un materiāla mēbeles,
				kas pēc formas, izmēra un tekstūras organiski iekļausies iestādes interjerā."/>			
			<HorecaItem header="Kafejnīcas" img={Cafe} text="Pateicoties plašajam risinājumu klāstam,
				katrs klients var izvēlēties mēbeļu komplektu, kas 100% apmierinās viņa redzējumu par telpu noformēšanu."/>
		</>
	)
}