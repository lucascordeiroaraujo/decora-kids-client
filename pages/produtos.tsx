import * as React from 'react';

import Header from '~/components/global/header';

import InternalTitle from '~/components/global/internalTitle';

import Products from '~/components/products';

import Footer from '~/components/global/footer';

import { creators as creatorsProducts } from '~/store/ducks/products';

import { creators as creatorsContato } from '~/store/ducks/contact';

const pageProducts = () => (
  <>
    <Header />

    <InternalTitle title="Produtos" />

    <Products />

    <Footer />
  </>
);

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

pageProducts.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  if (!store.getState().about.data) {
    store.dispatch(
      creatorsProducts.getRequest({
        page: 'products'
      })
    );
  }

  if (!store.getState().about.data) {
    store.dispatch(
      creatorsContato.getRequest({
        page: 'contact'
      })
    );
  }
};

export default pageProducts;
