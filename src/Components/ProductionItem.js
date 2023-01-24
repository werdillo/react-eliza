import React from 'react';

import '../assets/scss/_product-item.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Container } from 'react-bootstrap';

import cleaningFile from "../assets/Files/Products/cleaning.pdf";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
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
					return (<SwiperSlide><img src={img} alt="" className="product-slider"></img></SwiperSlide>);
				})}				
			</Swiper>
			
			<Container>
				<Row>
					<Col sm={12} lg={12}>
						<p className='item-title'>{props.title}</p>
						<p className='item-text'>{props.description}</p>
						{props.spec ?
							<div className='item-specs-block'>
								{props.specs.map((spec) =>{
									return (
										<div className='item-spec'>
											<span className='item-text-bold'>{spec.title}</span>
											<span className='item-text-bold'> - </span>
											<span className='item-text'>{spec.content}</span>
											<br></br>
										</div>
									);
								})}				
							</div>
						: null}
						<div className='item-links-wrapper'>
							{props.file ?
								<a href={props.file} target='_blank' rel='noopener noreferrer'>
									<div className='item-link'>Specification</div>
								</a>
								: null}
							{props.file_headboard ?
								<a href={props.file_headboard} target='_blank' rel='noopener noreferrer'>
									<div className='item-link'>Headboard</div>
								</a>
								: null}
							{props.file_options ?
								<a href={props.file_options} target='_blank' rel='noopener noreferrer'>
									<div className='item-link'>Options</div>
								</a>
								: null}
							<a href={cleaningFile} target='_blank' rel='noopener noreferrer'>
								<div className='item-link'>Cleaning</div>
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}