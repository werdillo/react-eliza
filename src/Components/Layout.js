import React  from 'react';
import { Outlet } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import logo from "../assets/images/Eliza-logo.svg";
import Navbar from "./Navbar"

export default function Layout() {
	return (
		<div id="container">
			<header> 
				<Navbar />
			</header> 
			<main id="main-content">
				<Outlet />
			</main>
			<footer className='footer'>
				<Container fluid className='footer-container'>
					<Row>
						<Col sm={12} lg={3}>
						<img src={logo} className='footer-img'></img>
						<p className='footer-about'>
 Šodien “Eliza” ir mīksto mēbeļu ražošanas uzņēmums, kas veiksmīgi un dinamiski attīstās.
  Kompānijas mēbeļu modeļi ir pieprasīti Anglijā, Vācijā, Šveicē, Itālijā, Austrijā un citās valstīs.</p>

						</Col>
						<Col xs={6} lg={2}>
							<p className='footer-title'>Birojs</p>
							<p className='footer-about'>Rīga, A. Deglava iela 50, LV-1035</p>
							<p className='footer-about'>info@eliza-k.lv</p>
							<p className='footer-about'>+371 67 549 423</p>
						</Col>
						<Col xs={6} lg={2}>
							<p className='footer-title'>Porolona ražotne</p>
							<p className='footer-about'>Rīga, A. Deglava iela 52A, LV-1035</p>
							<p className='footer-about'>order@eliza-k.lv</p>
							<p className='footer-about'>+371 28 363 860</p>
						</Col>
						<Col xs={6} lg={2}>
							<p className='footer-title'>Audumu noliktavae</p>
							<p className='footer-about'>audumi@eliza-k.lv</p>
							<p className='footer-about'>+371 26 599 422</p>
							<p className='footer-title'></p>

						</Col>
						<Col xs={6} lg={2}>
							<p className='footer-title'>Realizācijas nodaļa</p>
							<p className='footer-about'>Rīga, A. Deglava iela 52A, LV-1035</p>
							<p className='footer-about'>realizacija@eliza-k.lv</p>
							<p className='footer-about'>+371 67 549 424</p>
						</Col>
						<Col xs={6} lg={2}>

						</Col>

						{/* Eliza-K year */}
						<div className='footer-year-box'>
							<p className='footer-year'>© {(new Date().getFullYear())} A/S Eliza-K</p>
						</div>
					</Row>
				</Container>	

			</footer>
		</div>
	)
}
