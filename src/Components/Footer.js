import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import logo from "../assets/images/footer/Logo.svg";
import facebook from "../assets/images/footer/facebook-icon.svg";
import instagram from "../assets/images/footer/instagram-icon.svg";
import youtube from "../assets/images/footer/youtube-icon.svg";
import Winner2018 from "../assets/images/footer/Winner2018.svg";
import Winner2020 from "../assets/images/footer/Winner2020.svg";
import InnovationAward from "../assets/images/footer/InnovationAward.svg";
import IfAward2018 from "../assets/images/footer/IfAward2018.svg";

export default function Footer() {
	return (
		<Container fluid className='footer-container'>
			<Row>
				<Col sm={12} lg={3}>
					<div className='footer-left'>
						<div className='footer-left-wrapper'>
							<img src={logo} alt="" className='footer-logo'></img>
							<div className='footer-icons'>
								<img src={facebook} alt="" className='footer-icon'></img>
								<img src={instagram} alt="" className='footer-icon'></img>
								<img src={youtube} alt="" className='footer-icon'></img>
							</div>
						</div>
					</div>
				</Col>
				<Col sm={12} lg={6}>
					<div className='footer-awards'>
						<img src={Winner2018} alt="" className='footer-img'></img>
						<img src={Winner2020} alt="" className='footer-img'></img>
						<img src={InnovationAward} alt="" className='footer-img'></img>
						<img src={IfAward2018} alt="" className='footer-img'></img>
					</div>
				</Col>
				<Col sm={12} lg={3}>
					<div className='footer-text-wrapper'>
						<p className='footer-text'>+371 66 555 040</p>
						<p className='footer-text'>Riga, A. Deglava iela 50,</p>
						<p className='footer-text'>LV-1035</p>
						<p className='footer-text'>info@eliza-k.lv</p>
					</div>
				</Col>
				{/* Eliza-K year */}
				<div className='footer-year-box'>
					<p className='footer-year'>© {(new Date().getFullYear())} A/S Eliza-K</p>
				</div>
			</Row>
		</Container>
	);
}