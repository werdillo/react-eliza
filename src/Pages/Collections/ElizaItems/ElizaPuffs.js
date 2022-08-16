import React from 'react'

import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import ProductLanding from '../../../Components/ProductLanding';
import { Link } from 'react-router-dom';

import President from "../../../assets/images/production/puffs/president/president_1.png";
import Round from "../../../assets/images/production/puffs/round/round_1.png";
import Royal from "../../../assets/images/production/puffs/royal/royal_1.png";


function ProductLink(props) {
  return (
    <Col sm={12} lg={4}>
      <Link to={props.link}>
        <ProductLanding img={props.img} text={props.text} />
      </Link>
    </Col>
  );
}

export default function ElizaPufs() {
  return (
    <div className='products-container'>
      <Container fluid>
        <Row>
          <Col sm={12} lg={12}>
            <p className='collection-type-title'>Pufi</p>
          </Col>
          <ProductLink link='/Production/puffs/details/president' img={President} text="PRESIDENT" />
          <ProductLink link='/Production/puffs/details/round' img={Round} text="ROUND" />
          <ProductLink link='/Production/puffs/details/royal' img={Royal} text="ROYAL" />
        </Row>
      </Container>
    </div>
  )
}
