import React from 'react'

import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import ProductLanding from '../../../Components/ProductLanding';
import { Link } from 'react-router-dom';

import Polo from "../../../assets/images/production/sofas/polo/polo_1.png";
import Spencer from "../../../assets/images/production/sofas/spencer/spencer_1.png";



function ProductLink(props) {
  return (
    <Col sm={12} lg={4}>
      <Link to={props.link}>
        <ProductLanding img={props.img} text={props.text} />
      </Link>
    </Col>
  );
}

export default function ElizaSofas() {
  return (
    <div className='products-container'>
      <Container fluid>
        <Row>
          <Col sm={12} lg={12}>
            <p className='collection-type-title'>Dīvāni</p>
          </Col>
          <ProductLink link='/Production/sofa/details/polo' img={Polo} text="POLO" />
          <ProductLink link='/Production/sofa/details/spencer' img={Spencer} text="SPENCER" />
        </Row>
      </Container>
    </div>
  )
}
