import React from 'react';

import '../assets/scss/_product-item.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';

import cleaningFile from "../assets/Files/Products/cleaning.pdf";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';


export default function ProductionItem(props) {
	const { t } = useTranslation();
	return (
		<div className='product-item'>
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
					return (<SwiperSlide><img src={img} alt="" className="-slider"></img></SwiperSlide>);
				})}				
			</Swiper>
			
			<Container>
				<p className='-text xl'>{props.title}</p>
				<p className='-text'>{props.description}</p>
				{props.spec ?
					<div className='-specs'>
						{props.specs.map((spec) =>{
							return (
								<div className='-item'>
									<span className='-text bd'>{spec.title}</span>
									<span className='-text bd'> - </span>
									<span className='-text'>{spec.content}</span>
									<br></br>
								</div>
							);
						})}				
					</div>
				: null}
				<div className='-links-wrapper'>
					{props.file ?
						<a href={props.file} target='_blank' rel='noopener noreferrer'>
							<div className='-link'>{t("components.product-item.specification")}</div>
						</a>
						: null}
					{props.file_headboard ?
						<a href={props.file_headboard} target='_blank' rel='noopener noreferrer'>
							<div className='-link'>Headboard</div>
						</a>
						: null}
					{props.file_options ?
						<a href={props.file_options} target='_blank' rel='noopener noreferrer'>
							<div className='-link'>Options</div>
						</a>
						: null}
					<a href={cleaningFile} target='_blank' rel='noopener noreferrer'>
						<div className='-link'>{t("components.product-item.cleaning")}</div>
					</a>
				</div>
			</Container>
		</div>
	);
}