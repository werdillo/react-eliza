import React, {useState} from 'react';
import '../../App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import ProductionItem from '../../Components/ProductionItem';

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
          <Col sm={12} lg={4}>
            <Link to={item.path}>
              <ProductLanding img={item.photo[0]} text={item.title} />
            </Link>
          </Col>
        );
     }
    ))
  } 

  const [filter, setFilter] = useState("all");
  return (
      <Container fluid >
				<Row>
          <div className='products-container'>
            <div className='filter-wrapper'>
              <button className='filter-link' onClick={() => setFilter("all")}>all</button>
              <button className='filter-link' onClick={() => setFilter("sofa")}>sofa</button>
              <button className='filter-link' onClick={() => setFilter("beds")}>beds</button>
              <button className='filter-link' onClick={() => setFilter("chair")}>chairs</button>
            </div>
          </div>
          { (filter === "beds" || filter === "all") &&
            <>
              <Col sm={12} lg={12}>
                <p className='collection-type-title'>Gultas</p>
              </Col>
              <ProductLinks data={SophisticatedLiving_beds} />
            </>
           }
          { (filter === "chair" || filter === "all") &&
            <>
              <Col sm={12} lg={12}>
                <p className='collection-type-title'>Kresli</p>
              </Col>
              <ProductLinks data={SophisticatedLiving_chair} />
            </>
          } 
          { (filter === "sofa" || filter === "all") &&
            <>
              <Col sm={12} lg={12}>
                <p className='collection-type-title'>Divani</p>
              </Col>
              <ProductLinks data={SophisticatedLiving_sofa} />
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
              images={item.photo} key={item} />}
          />
          );
        })}
        {SophisticatedLiving_chair.map((item) => {
          return (
            <Route path={item.path}
             element={<ProductionItem
              title={item.title}
              description=""
              images={item.photo} key={item} />}
          />
          );
        })}
        {SophisticatedLiving_sofa.map((item) => {
          return (
            <Route path={item.path}
             element={<ProductionItem
              title={item.title}
              description=""
              images={item.photo} key={item} />}
          />
          );
        })}
      </Routes>
    </>

  )
}
