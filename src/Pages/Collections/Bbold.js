import React, { useState } from 'react';
import '../../App.css';
import { Route, Routes, Outlet, useLocation, useNavigate } from 'react-router-dom';
import ProductionItem from '../../Components/ProductionItem';
import { useTranslation } from 'react-i18next';

import Bbold_sofa from './BboldItems/BboldSofas';

import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// products images
import ProductLanding from '../../Components/ProductLanding';


export default function Bbold() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const location = useLocation();
  const navigate = useNavigate();


  function Filter() {

    const handleSetFilter = (item) => {
      setFilter(item);
      if (location.pathname !== "/collection/bbold/") {
        navigate('/collection/bbold/');
      }
    }

    return (
      <div className="sticky">
        <div className='filter-wrapper'>
          <div className={filter === "all" ? 'filter-link-active' : 'filter-link'} onClick={() => handleSetFilter("all")}>{t("Pages.collection.all")}</div>
          <div className={filter === "sofa" ? 'filter-link-active' : 'filter-link'} onClick={() => handleSetFilter("sofa")}>{t("Pages.collection.sofas")}</div>
        </div>
      </div>
    )
  }



  function BboldLinks() {

    function ProductLinks({ data, title }) {
      return (
        <>
          <Col sm={12} lg={12}>
            <p className='collection-type-title'>{title}</p>
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
          {(filter === "sofa" || filter === "all") && <ProductLinks data={Bbold_sofa} title={t("Pages.collection.sofas")} />}
        </Row>
      </Container>
    )
  }

  return (
    <>
      <Filter />
      <Outlet />
      <Routes>
        <Route index element={<BboldLinks />} />

        {Bbold_sofa.map((item) => {
          return (
            <Route path={item.path}
              element={<ProductionItem
                title={item.title}
                description=""
                images={item.photo}
                file={item.file}
                key={item.key} />}
            />
          );
        })}
      </Routes>
    </>

  )
}
