import React from 'react'

import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
// import ProductLanding from '../../../Components/ProductLanding';
// import { Link } from 'react-router-dom';


// function ProductLink(props) {
//   return (
//     <Col sm={12} lg={4}>
//       <Link to={props.link}>
//         <ProductLanding img={props.img} text={props.text} />
//       </Link>
//     </Col>
//   );
// }

export default function ElizaSofas() {
  return (
    <div className='products-container'>
      <Container fluid>
        <Row>
          <Col sm={12} lg={12}>
            <p className='collection-type-title'>Dīvāni</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
