import React, {useState} from 'react';
import '../../assets/scss/_collection.scss';
import { Route, Routes, Outlet, useLocation, useNavigate } from 'react-router-dom';
import ProductionItem from '../../Components/ProductionItem';
import { useTranslation } from 'react-i18next';

import SophisticatedLiving_beds from './SophisticatedLivingItems/SophisticatedLivingBeds';
import SophisticatedLiving_chair from './SophisticatedLivingItems/SophisticatedLivingChairs';
import SophisticatedLiving_sofa from './SophisticatedLivingItems/SophisticatedLivingSofas';

import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// products images
import ProductLanding from '../../Components/ProductLanding';


export default function SophisticatedLiving() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const location = useLocation();
  const navigate = useNavigate();


  function Filter() {
    
    const handleSetFilter = (event, item) => {
      setFilter(item);
      if (location.pathname !== "/collection/sophisticated-living/") navigate('/collection/sophisticated-living/');
    }
    
    return (
      <div className="sticky">
        <div className='filter-wrapper'>
          <div className={filter === "all" ? 'filter-link active' : 'filter-link'} onClick={(event) => handleSetFilter(event, "all")}>{t("Pages.collection.all")}</div>
          <div className={filter === "beds" ? 'filter-link active' : 'filter-link'} onClick={(event) => handleSetFilter(event, "beds")}>{t("Pages.collection.beds")}</div>
          <div className={filter === "chair" ? 'filter-link active' : 'filter-link'} onClick={(event) => handleSetFilter(event, "chair")}>{t("Pages.collection.chairs")}</div>
          <div className={filter === "sofa" ? 'filter-link active' : 'filter-link'} onClick={(event) => handleSetFilter(event, "sofa")}>{t("Pages.collection.sofas")}</div>
          <div className={filter === "mattresses" ? 'filter-link active' : 'filter-link'} onClick={(event) => handleSetFilter(event, "mattresses")}>Mattresses</div>
        </div>
      </div>
    )
  }


  
  function SophisticatedLivingLinks() {

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
          {(filter === "beds" || filter === "all") && <ProductLinks data={SophisticatedLiving_beds} title={t("Pages.collection.beds")} />}
          {(filter === "chair" || filter === "all") && <ProductLinks data={SophisticatedLiving_chair} title={t("Pages.collection.chairs")} />}
          {(filter === "sofa" || filter === "all") && <ProductLinks data={SophisticatedLiving_sofa} title={t("Pages.collection.sofas")} />}
          {(filter === "mattresses" || filter === "all") && <ProductLinks data={SophisticatedLiving_beds} title='Mattresses' />}
        </Row>
      </Container>
    )
  }

  return (
    <>
      <Filter />
      <Outlet />
      <Routes>
        <Route index element={<SophisticatedLivingLinks />} />

        {SophisticatedLiving_beds.map((item) => {
          return (
            <Route path={item.path}
             element={<ProductionItem
              title={item.title}
              description=""
              images={item.photo}
              file={item.file}
              file_headboard={item.file_headboard} 
              file_options={item.file_options} 
              key={item.key} />}
          />
          );
        })}
        {SophisticatedLiving_chair.map((item) => {
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
        {SophisticatedLiving_sofa.map((item) => {
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
        {SophisticatedLiving_beds.map((item) => {
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
