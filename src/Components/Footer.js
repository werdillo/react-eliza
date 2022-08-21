import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import logo from "../assets/images/footer/Logo.svg";

import facebook from "../assets/images/footer/facebook-icon.svg";
import instagram from "../assets/images/footer/instagram-icon.svg";
import youtube from "../assets/images/footer/youtube-icon.svg";

import Special2017 from "../assets/images/footer/Special2017.svg";
import Winner2018 from "../assets/images/footer/Winner2018.svg";
import Winner2020 from "../assets/images/footer/Winner2020.svg";
import InnovationAward from "../assets/images/footer/InnovationAward.svg";
import IconicAwards2018 from "../assets/images/footer/IconicAwards2018.svg";
import DesignAwards2016 from "../assets/images/footer/DesignAwards2016.svg";
import InteriorAwards2015 from "../assets/images/footer/InteriorAwards2015.svg";
import IfAward2018 from "../assets/images/footer/IfAward2018.svg";
import IfAward2020 from "../assets/images/footer/IfAward2020.svg";

export default function Footer() {
	return (
		<Container fluid>
			<Row className='footer-container'>
				<Col sm={12} lg={2}>
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
				<Col sm={12} lg={10}>
					<div className='footer-awards'>
						<img src={InteriorAwards2015} alt="" className='footer-img'></img>
						<img src={DesignAwards2016} alt="" className='footer-img'></img>
						<img src={IconicAwards2018} alt="" className='footer-img'></img>
						<img src={Special2017} alt="" className='footer-img'></img>
						<img src={Winner2018} alt="" className='footer-img'></img>
						<img src={Winner2020} alt="" className='footer-img'></img>
						<img src={IfAward2018} alt="" className='footer-img'></img>
						<img src={IfAward2020} alt="" className='footer-img'></img>
						<img src={InnovationAward} alt="" className='footer-img'></img>
					</div>
				</Col>
				{/* Eliza-K year */}
			</Row>
			<div className='footer-year-box'>
				<p className='footer-year'>© {(new Date().getFullYear())} A/S Eliza-K</p>
			</div>
		</Container>
	);
}