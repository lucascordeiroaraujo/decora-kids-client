import React from 'react';

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import Category from './style';

import Product from '../product';

import { Container } from '~/public/styles/global';

const cpItens: React.FC = () => {
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

  return (
    <Container>
      <Category>
        <div className="category-title">
          <div>
            <span>Móveis</span>
          </div>
        </div>

        <Carousel className="react-multi-carousel" responsive={responsive}>
          <Product />

          <Product />

          <Product />

          <Product />

          <Product />
        </Carousel>
      </Category>
    </Container>
  );
};

export default React.memo(cpItens);
