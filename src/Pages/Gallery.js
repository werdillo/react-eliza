import React, { useState, useCallback } from 'react';
import '../assets/scss/_gallery.scss';
import ImageViewer from 'react-simple-image-viewer';
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";


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
    require("../assets/images/gallery/img15_1.jpg"),
    require("../assets/images/gallery/img16.png"),
    require("../assets/images/gallery/img17.png"),
    require("../assets/images/gallery/img18.png"),
    require("../assets/images/gallery/img19.png"),
    require("../assets/images/gallery/img20.png"),
    require("../assets/images/gallery/img21.png"),
    require("../assets/images/gallery/img22.png"),
    require("../assets/images/gallery/img23.png"),
    require("../assets/images/gallery/img24.png"),
    require("../assets/images/gallery/img25.png"),
    require("../assets/images/gallery/img26.png"),
    require("../assets/images/gallery/img27.png"),
    require("../assets/images/gallery/img28.png"),
  ];
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const { t } = useTranslation();

  return (
    <Container fluid>
      <Helmet>
				<title>Gallery</title>
				<meta name="description" content="Eliza-k gallery" />
        <meta name="keywords" content="eliza, eliza-k, gallery" />
			</Helmet>
      <p className='gallery-title'>{t("Pages.gallery.pageTitle")}</p>
      <Row>
        {images.map((src, index) => (
          <Col xs={6} md={4} lg={3}>
            <div className='gallery-wrapper'>
              <LazyLoadImage 
                src={ src }
                onClick={ () => openImageViewer(index) }
                className="img-fluid"
                key={ index }
                alt=""
                effect='blur'
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