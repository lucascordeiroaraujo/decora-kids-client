import React from 'react';

import Product from './style';

interface Iprops {
  openLightbox: any;
  position: number;
}

const cpProduct: React.FC<Iprops> = props => (
  <Product>
    <div
      style={{ backgroundImage: 'url(https://picsum.photos/200/200)' }}
      onClick={() => props.openLightbox(props.position)}
    >
      <img
        src="https://picsum.photos/200/200"
        alt=""
        title=""
        width="200"
        height="200"
      />
    </div>
  </Product>
);

export default React.memo(cpProduct);
