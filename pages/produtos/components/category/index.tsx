import React from 'react';

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import Category from './style';

import Product from '../product';

import { Container } from '~/public/styles/global';

import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

import { iProducts } from '~/store/ducks/products';

import { iProductsCats } from '~/store/ducks/products';

import slugify from 'react-slugify';

const cpItens: React.FC<iProductsCats> = props => {
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

  const openLightbox = (photoIndex: number) => {
    setState({
      ...state,
      photoIndex,
      isOpen: true
    });
  };

  return (
    <Container id={slugify(props.category_name)}>
      <Category>
        <div className="category-title">
          <div>
            <span>{props.category_name}</span>
          </div>
        </div>

        {state.isOpen && (
          <Lightbox
            mainSrc={props.products[state.photoIndex].image}
            imageTitle={props.products[state.photoIndex].name}
            nextSrc={
              props.products[(state.photoIndex + 1) % props.products.length]
                .image
            }
            prevSrc={
              props.products[
                (state.photoIndex + props.products.length - 1) %
                  props.products.length
              ].image
            }
            onCloseRequest={() => setState({ ...state, isOpen: false })}
            onMovePrevRequest={() =>
              setState({
                ...state,
                photoIndex:
                  (state.photoIndex + props.products.length - 1) %
                  props.products.length
              })
            }
            onMoveNextRequest={() =>
              setState({
                ...state,
                photoIndex: (state.photoIndex + 1) % props.products.length
              })
            }
          />
        )}

        <Carousel className="react-multi-carousel" responsive={responsive}>
          {props.products.map((product: iProducts, index: number) => (
            <Product
              key={index}
              product={product}
              openLightbox={openLightbox}
              position={index}
            />
          ))}
        </Carousel>
      </Category>
    </Container>
  );
};

export default React.memo(cpItens);
