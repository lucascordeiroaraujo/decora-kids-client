import React from 'react';

import Product from './style';

import { iProducts } from '~/store/ducks/products';

interface Iprops {
  openLightbox: any;
  position: number;
  product: iProducts;
}

const cpProduct: React.FC<Iprops> = props => (
  <Product>
    <div
      style={{ backgroundImage: `url(${props.product.image})` }}
      onClick={() => props.openLightbox(props.position)}
    >
      <img
        src={props.product.image}
        alt={props.product.name}
        title={props.product.name}
        width="200"
        height="200"
      />
    </div>
  </Product>
);

export default React.memo(cpProduct);
