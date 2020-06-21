import React from 'react';

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import Category from './style';

import Product from '../product';

import { Container } from '~/public/styles/global';

import Modal from '../modal';

import 'react-image-lightbox/style.css';

import { iProducts } from '~/store/ducks/products';

import { iProductsCats } from '~/store/ducks/products';

import slugify from 'react-slugify';

const cpItens: React.FC<iProductsCats> = props => {
  const [state, setState] = React.useState({
    productIndex: 0,
    isOpen: false,
    disablePrev: true,
    disableNext: props.products.length >= 2 ? false : true
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

  const handleControls = (productIndex: number) => {
    setState({
      ...state,
      productIndex,
      isOpen: true,
      disablePrev: productIndex === 0 ? true : false,
      disableNext: productIndex === props.products.length - 1
    });
  };

  const openLightbox = (productIndex: number) => {
    handleControls(productIndex);
  };

  const closeModal = () => {
    setState({
      ...state,
      isOpen: false
    });
  };

  const prevModal = () => {
    handleControls(state.productIndex === 0 ? 0 : state.productIndex - 1);
  };

  const nextModal = () => {
    handleControls(
      state.productIndex === props.products.length - 1
        ? props.products.length - 1
        : state.productIndex + 1
    );
  };

  const escFunction = React.useCallback((event: any) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  return (
    <Container id={slugify(props.category_name)}>
      <Category>
        <div className="category-title">
          <div>
            <span>{props.category_name}</span>
          </div>
        </div>

        <Modal
          product={props.products[state.productIndex]}
          modalInfo={state}
          closeModal={closeModal}
          prevModal={prevModal}
          nextModal={nextModal}
        />

        <Carousel className="react-multi-carousel" responsive={responsive}>
          {props.products.map((product: iProducts, index: number) => (
            <Product
              key={product.image}
              product={product}
              position={index}
              openLightbox={openLightbox}
            />
          ))}
        </Carousel>
      </Category>
    </Container>
  );
};

export default React.memo(cpItens);
