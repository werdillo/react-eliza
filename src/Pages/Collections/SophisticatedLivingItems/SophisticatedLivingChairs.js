import React from 'react'

import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import ProductLanding from '../../../Components/ProductLanding';
import { Link } from 'react-router-dom';

import Altitude from "../../../assets/images/production/chairs/altitude/altitude_1.png";
import Haleiwa from "../../../assets/images/production/chairs/haleiwa/haleiwa_1.png";
import Local from "../../../assets/images/production/chairs/local/local_1.png";
import Serenity from "../../../assets/images/production/chairs/serenity/serenity_1.png";


function ProductLink(props) {
  return (
    <Col sm={12} lg={4}>
      <Link to={props.link}>
        <ProductLanding img={props.img} text={props.text} />
      </Link>
    </Col>
  );
}

export default function  SophisticatedLivingChairs() {
  return (
    <div className='products-container'>
      <Container fluid>
        <Row>
          <Col sm={12} lg={12}>
            <p className='collection-type-title'>Krēsli</p>
          </Col>
          <ProductLink link='/Production/chairs/details/altitude' img={Altitude} text="ALTITUDE" />
          <ProductLink link='/Production/chairs/details/haleiwa' img={Haleiwa} text="HALEIWA" />
          <ProductLink link='/Production/chairs/details/local' img={Local} text="LOCAL" />
          <ProductLink link='/Production/chairs/details/serenity' img={Serenity} text="SERENITY" />
        </Row>
      </Container>
    </div>
  )
}
