import * as React from 'react';

import Header from '~/components/global/header';

import Slide from '~/components/home/slide';

import Products from '~/components/home/products';

import Blog from '~/components/home/blog';

import Instagram from '~/components/home/instagram';

import Footer from '~/components/global/footer';

import { creators as creatorsHome } from '~/store/ducks/home';

import { creators as creatorsProducts } from '~/store/ducks/products';

import { creators as creatorsContato } from '~/store/ducks/contact';

const pageHome = () => (
  <>
    <Header />

    <Slide />

    <Products />

    <Blog />

    <Instagram />

    <Footer />
  </>
);

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

pageHome.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  if (!store.getState().home.data) {
    store.dispatch(
      creatorsHome.getRequest({
        page: 'home'
      })
    );
  }

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
};

export default pageHome;
