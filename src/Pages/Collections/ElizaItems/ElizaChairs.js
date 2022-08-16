import React from 'react'

import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import ProductLanding from '../../../Components/ProductLanding';
import { Link } from 'react-router-dom';

import Elefant from "../../../assets/images/production/chairs/elefant/elefant_1.png";
import Flamingo from "../../../assets/images/production/chairs/flamingo/flamingo_1.png";
import Hilton from "../../../assets/images/production/chairs/hilton/hilton_1.png";
import Mirre from "../../../assets/images/production/chairs/mirre/mirre_1.png";
import Nord from "../../../assets/images/production/chairs/nord/nord_1.png";
import Polo from "../../../assets/images/production/chairs/polo/polo_1.png";
import Spencer from "../../../assets/images/production/chairs/spencer/spencer_1.png";


function ProductLink(props) {
  return (
    <Col sm={12} lg={4}>
      <Link to={props.link}>
        <ProductLanding img={props.img} text={props.text} />
      </Link>
    </Col>
  );
}


export default function ElizaChairs() {
  return (
    <div className='products-container'>
      <Container fluid>
        <Row>
          <Col sm={12} lg={12}>
            <p className='collection-type-title'>Krēsli</p>
          </Col>
          <ProductLink link='/Production/chairs/details/elefant' img={Elefant} text="ELEFANT" />
          <ProductLink link='/Production/chairs/details/flamingo' img={Flamingo} text="FLAMINGO" />
          <ProductLink link='/Production/chairs/details/hilton' img={Hilton} text="HILTON" />
          <ProductLink link='/Production/chairs/details/mirre' img={Mirre} text="MIRRE" />
          <ProductLink link='/Production/chairs/details/nord' img={Nord} text="NORD" />
          <ProductLink link='/Production/chairs/details/polo' img={Polo} text="POLO" />
          <ProductLink link='/Production/chairs/details/spencer' img={Spencer} text="SPENCER" />
        </Row>
      </Container>
    </div>
  )
}
