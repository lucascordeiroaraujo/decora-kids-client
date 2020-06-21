import * as React from 'react';

import Seo from '~/seo';

import Header from '~/components/global/header';

import InternalTitle from '~/components/global/internalTitle';

import Products from '~/components/products';

import Footer from '~/components/global/footer';

import { creators as creatorsProducts } from '~/store/ducks/products';

import { creators as creatorsContato } from '~/store/ducks/contact';

import { creators as creatorsPartners } from '~/store/ducks/partners';

const pageProducts = () => (
  <>
    <Seo page="products" isRestWp={false} />

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

  if (!store.getState().products.data) {
    store.dispatch(
      creatorsProducts.getRequest({
        page: 'products'
      })
    );
  }

  if (!store.getState().contact.data) {
    store.dispatch(
      creatorsContato.getRequest({
        page: 'contact'
      })
    );
  }

  if (!store.getState().partners.data) {
    store.dispatch(
      creatorsPartners.getRequest({
        page: 'partners'
      })
    );
  }
};

export default pageProducts;
