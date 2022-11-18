import React, {useState} from 'react';
import '../../App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
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



function SophisticatedLivingLinks() {
  function ProductLinks({data}) {
    return (
      data.map((item) => {
        return (
          <Col sm={12} md={6} lg={3}>
            <Link to={item.path}>
              <ProductLanding img={item.photo[0]} text={item.title} />
            </Link>
          </Col>
        );
     }
    ))
  } 
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  return (
      <Container fluid >
				<Row>
            <div className='filter-wrapper'>
              <div className={filter === "all" ? 'filter-link-active' : 'filter-link'} onClick={() => setFilter("all")}>{t("Pages.collection.all")}</div>
              <div className={filter === "beds" ? 'filter-link-active' : 'filter-link'} onClick={() => setFilter("beds")}>{t("Pages.collection.beds")}</div>
              <div className={filter === "chair" ? 'filter-link-active' : 'filter-link'} onClick={() => setFilter("chair")}>{t("Pages.collection.chairs")}</div>
              <div className={filter === "sofa" ? 'filter-link-active' : 'filter-link'} onClick={() => setFilter("sofa")}>{t("Pages.collection.sofas")}</div>
              <div className={filter === "mattresses" ? 'filter-link-active' : 'filter-link'} onClick={() => setFilter("mattresses")}>Mattresses</div>
            </div>
          { (filter === "beds" || filter === "all") &&
            <>
              <Col sm={12} lg={12}>
                <p className='collection-type-title'>{t("Pages.collection.beds")}</p>
              </Col>
              <ProductLinks data={SophisticatedLiving_beds} />
            </>
           }
          { (filter === "chair" || filter === "all") &&
            <>
              <Col sm={12} lg={12}>
                <p className='collection-type-title'>{t("Pages.collection.chairs")}</p>
              </Col>
              <ProductLinks data={SophisticatedLiving_chair} />
            </>
          } 
          { (filter === "sofa" || filter === "all") &&
            <>
              <Col sm={12} lg={12}>
               <p className='collection-type-title'>{t("Pages.collection.sofas")}</p>
              </Col>
              <ProductLinks data={SophisticatedLiving_sofa} />
            </>
         }
         {(filter === "mattresses" || filter === "all") &&
            <>
              <Col sm={12} lg={12}>
                <p className='collection-type-title'>Mattresses</p>
              </Col>
          <ProductLinks data={SophisticatedLiving_beds} />
            </>
         }
       </Row>
      </Container>
  )
}


export default function SophisticatedLiving() {
  return (
    <>
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
