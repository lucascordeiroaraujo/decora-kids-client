import React from 'react';

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import Category from './style';

import Product from '../product';

import { Container } from '~/public/styles/global';

import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

const cpItens: React.FC = () => {
  const [state, setState] = React.useState({
    photoIndex: 0,
    isOpen: false
  });

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2
    }
  };

  const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500'
  ];

  const openLightbox = (photoIndex: number) => {
    setState({
      ...state,
      photoIndex,
      isOpen: true
    });
  };

  return (
    <Container>
      <Category>
        <div className="category-title">
          <div>
            <span>Móveis</span>
          </div>
        </div>

        {state.isOpen && (
          <Lightbox
            mainSrc={images[state.photoIndex]}
            nextSrc={images[(state.photoIndex + 1) % images.length]}
            prevSrc={
              images[(state.photoIndex + images.length - 1) % images.length]
            }
            onCloseRequest={() => setState({ ...state, isOpen: false })}
            onMovePrevRequest={() =>
              setState({
                ...state,
                photoIndex:
                  (state.photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              setState({
                ...state,
                photoIndex: (state.photoIndex + 1) % images.length
              })
            }
          />
        )}

        <Carousel className="react-multi-carousel" responsive={responsive}>
          <Product openLightbox={openLightbox} position={0} />

          <Product openLightbox={openLightbox} position={1} />

          <Product openLightbox={openLightbox} position={2} />

          <Product openLightbox={openLightbox} position={3} />

          <Product openLightbox={openLightbox} position={4} />
        </Carousel>
      </Category>
    </Container>
  );
};

export default React.memo(cpItens);
