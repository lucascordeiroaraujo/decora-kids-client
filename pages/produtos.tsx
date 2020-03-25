import * as React from 'react';

import Header from '~/components/global/header';

import InternalTitle from '~/components/global/internalTitle';

import Products from '~/components/products';

import Footer from '~/components/global/footer';

const pageProducts: React.FC = () => (
  <>
    <Header />

    <InternalTitle title="Produtos" />

    <Products />

    <Footer />
  </>
);

export default pageProducts;
