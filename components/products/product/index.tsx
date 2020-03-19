import React from 'react';

import Product from './style';

const cpProduct: React.FC = () => (
  <Product>
    <div style={{ backgroundImage: 'url(https://picsum.photos/200/200)' }}>
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
