import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import size from "../assets/images/production/size.png";
import cleaning from "../assets/images/production/cleaning.png";
import cleaningFile from "../assets/Files/Products/cleaning.pdf";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation, Autoplay, Pagination } from "swiper";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'

export default function ProductionItem(props) {
	return (
		<>
			<Swiper
				loop={true}
				centeredSlides={true}
				autoplay={{
					delay: 10000,
					disableOnInteraction: false,
				}}
				pagination={{
					type: "fraction",
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Navigation, Pagination]}
			>
				{props.images.map((img) => {
					return (
						<>
							<SwiperSlide><img src={img.src} className="product-slider"></img></SwiperSlide>
						</>
					);
				})}				
			</Swiper>
			<Container>				
				<Row>
					<Col sm={12} lg={12}>
						<p className='item-title'>{props.title}</p>
						<p className='item-text'>{props.description}</p>
						{/* <p className='item-header'>Apraksts</p> */}
						<div className='item-specs-block'>
							{/* return spec */}
							{props.specs.map((spec) =>{
								return (
									<div className='item-spec'>
										<span className='item-text-bold'>{spec.title}</span>
										<span className='item-text-bold'> - </span>
										<span className='item-text'>{spec.content}</span>
										<br></br>
									</div >
								);
							})}				
						</div>
						<a href={cleaningFile} target='_blank' rel='noopener noreferrer'>
							<img src={cleaning} className="item-document-link" />
						</a>
						{props.file ? 
						<a href={props.file} target='_blank' rel='noopener noreferrer'>
							<img src={size} className="item-document-link" />
						</a>
						
						: null}
					</Col>	
				</Row>
			</Container>
		</>
	);
}