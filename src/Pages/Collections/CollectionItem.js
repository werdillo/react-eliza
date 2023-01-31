import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import '../../assets/scss/_collection.scss';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ProductionItem from '../../Components/ProductionItem';
import ProductLanding from '../../Components/ProductLanding';


export default function CollectionItem({data, collection}) {
	const { t } = useTranslation();
	const [filter, setFilter] = useState("all");
	const location = useLocation();
	const navigate = useNavigate();
	const handleSetFilter = (item) => {
		setFilter(item);
		if (location.pathname !== "/collection/" + collection) navigate('/collection/' + collection);
	}

	function Links({data}) {
		function ProductLinks({ data, title }) {
			return (
				<>
					<Col lg={12}>
						<p className='product-type-title'>{title}</p>
					</Col>
					{data.map((item) => {
						return (
							<Col sm={12} md={6} lg={3}>
								<Link to={item.path}>
									<ProductLanding img={item.photo[0]} text={item.title} />
								</Link>
							</Col>
						);
					})}
				</>
			)
		}
		return (
			<Container fluid >
				<Row>
					{data.map((data) => {
						return (filter === data.path || filter === "all") && <ProductLinks data={data.data} title={data.title} />
					})}
				</Row>
			</Container>
		)
	}

	return (
		<>
			<Helmet>
				<title>{collection.charAt(0).toUpperCase() + collection.slice(1)}</title>
				<meta name="description" content={"Eliza " + collection.charAt(0).toUpperCase() + collection.slice(1) + " collections" }/>
				<meta name="keywords" content={"Eliza, eliza-k, " + collection.charAt(0).toUpperCase() + collection.slice(1) + ", collections" }/>
			</Helmet>
			<div className="sticky">
				<div className='filter'>
					<div className={filter === "all" ? '-link active' : '-link'} onClick={() => handleSetFilter("all")}>{t("Pages.collection.all")}</div>
					{data.map((data) => {
						return(
							<div className={filter === data.path ? '-link active' : '-link'} onClick={() => handleSetFilter(data.path)}>
								{data.title}
							</div>
						); 
					})}
				</div>
			</div>

			<Outlet />
			<Routes>
				<Route index element={<Links data={data}/>} />
				{data.map((data) => {
					return data.data.map(item => {
						return (
							<Route path={item.path}
								element={
									<ProductionItem
									title={item.title}
									description=""
									images={item.photo}
									file={item.file}
									key={item.key} />
								}
							/>
						);
					})
				})}
			</Routes>
		</>
	)
}