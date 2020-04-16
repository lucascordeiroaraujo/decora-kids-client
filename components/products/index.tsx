import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import { iProductsCats } from '~/store/ducks/products';

import Category from './category';

const cpProducts: React.FC = () => {
  const { error, products } = useSelector((state: applicationState) => ({
    error: state.products.error,
    products: state.products.data
  }));

  if (error) return null;

  return (
    <>
      {products.map((cat: iProductsCats, index: number) => (
        <Category key={index} {...cat} />
      ))}
    </>
  );
};

export default cpProducts;
