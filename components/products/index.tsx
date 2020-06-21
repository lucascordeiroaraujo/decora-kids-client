import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import { iProductsCats } from '~/store/ducks/products';

import Category from './category';

const cpProducts: React.FC = () => {
  const { error, products } = useSelector((state: applicationState) => ({
    error: state.products.error,
    products: state.products.data.categories
  }));

  if (error) return null;

  return (
    <>
      {products.map((cat: iProductsCats) => (
        <Category key={cat.category_name} {...cat} />
      ))}
    </>
  );
};

export default cpProducts;
