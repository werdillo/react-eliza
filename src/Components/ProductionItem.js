import React from 'react';
import { Helmet } from "react-helmet";

import '../assets/scss/_product-item.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';

// import cleaningFile from "../assets/Files/Products/cleaning.pdf";
import cleaningEn from "../assets/Files/Products/cleaning-en.pdf";
import cleaningRu from "../assets/Files/Products/cleaning-ru.pdf";
import cleaningLv from "../assets/Files/Products/cleaning-lv.pdf";
import cleaningMattressesEn from "../assets/Files/Products/cleaning-mattresses-en.pdf";
import cleaningMattressesRu from "../assets/Files/Products/cleaning-mattresses-ru.pdf";
import cleaningMattressesLv from "../assets/Files/Products/cleaning-mattresses-lv.pdf";

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
			<Helmet>
				<title>{props.title}</title>
				<meta name="description" content={"Eliza " + props.title + " collections" }/>
				<meta name="keywords" content={"Eliza, eliza-k, " + props.title + ", collections" }/>
			</Helmet>
			{(props.images.length > 1) ?
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
				:
				<img src={props.images[0]} alt="" className="-slider"></img>
			}
			
			<Container>
				<p className='-text xl'>{props.title}</p>
				<p className='-text'>{props.description}</p>
				<div className='-links-wrapper'>
					{props.file ?
						<a href={props.file} target='_blank' rel='noopener noreferrer'>
							<div className='-link'>{t("components.product-item.specification")}</div>
						</a>
						: null}
					{props.file_local ?
						<>
							{t("local") === "en" &&
								<a href={props.file_local.en} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{t("components.product-item.specification")}</div>
								</a>}
							{t("local") === "lv" &&
								<a href={props.file_local.lv} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{t("components.product-item.specification")}</div>
								</a>}
							{t("local") === "ru" &&
								<a href={props.file_local.ru} target='_blank' rel='noopener noreferrer'>
									<div className='-link'>{t("components.product-item.specification")}</div>
								</a>}
						</>
					: null}
					{props.type === "mattresses" ?
					<>
						{t("local") === "en" &&
							<a href={cleaningMattressesEn} target='_blank' rel='noopener noreferrer'>
								<div className='-link'>{t("components.product-item.cleaning")}</div>
							</a>
						}
						{t("local") === "lv" &&
							<a href={cleaningMattressesLv} target='_blank' rel='noopener noreferrer'>
								<div className='-link'>{t("components.product-item.cleaning")}</div>
							</a>
						}
						{t("local") === "ru" &&
							<a href={cleaningMattressesRu} target='_blank' rel='noopener noreferrer'>
								<div className='-link'>{t("components.product-item.cleaning")}</div>
							</a>
						}
					</>
					:
					<>
						{t("local") === "en" &&
							<a href={cleaningEn} target='_blank' rel='noopener noreferrer'>
								<div className='-link'>{t("components.product-item.cleaning")}</div>
							</a>
						}
						{t("local") === "lv" &&
							<a href={cleaningLv} target='_blank' rel='noopener noreferrer'>
								<div className='-link'>{t("components.product-item.cleaning")}</div>
							</a>
						}
						{t("local") === "ru" &&
							<a href={cleaningRu} target='_blank' rel='noopener noreferrer'>
								<div className='-link'>{t("components.product-item.cleaning")}</div>
							</a>
						}
					</>								
					// <a href={cleaningFile} target='_blank' rel='noopener noreferrer'>
					// 	<div className='-link'>{t("components.product-item.cleaning")}</div>
					// </a>}
				}
				</div>
			</Container>
		</div>
	);
}