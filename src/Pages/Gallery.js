import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import '../App.css';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    require("../assets/images/gallery/img1.png"), 
    require("../assets/images/gallery/img2.png"), 
    require("../assets/images/gallery/img3.png"), 
    require("../assets/images/gallery/img4.png"), 
    require("../assets/images/gallery/img5.png"), 
    require("../assets/images/gallery/img6.png"), 
    require("../assets/images/gallery/img7.png"), 
    require("../assets/images/gallery/img8.png"), 
    require("../assets/images/gallery/img9.png"), 
    require("../assets/images/gallery/img10.png"),
    require("../assets/images/gallery/img11.png"),
    require("../assets/images/gallery/img12.png"),
    require("../assets/images/gallery/img13.png"),
    require("../assets/images/gallery/img14.png"),
    require("../assets/images/gallery/img15.png"),
  ];
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };


  return (
    <Container fluid>
      <p className='production-type-title'>Galerija</p>
      <Row>
        {images.map((src, index) => (
          <Col xs={6} md={4} lg={3}>
            <div className='production-type-wrapper'>
              <img 
              src={ src }
              onClick={ () => openImageViewer(index) }
              className="lazyload img-fluid"
              key={ index }
              alt=""
              />
            </div>

          </Col>
        ))}
      </Row>
      {isViewerOpen && (
          <ImageViewer
            src={ images }
            currentIndex={ currentImage }
            disableScroll={ true }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
            loading="lazy"
          />
        )}
    </Container>	   
  );
}