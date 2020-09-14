import * as React from 'react';

import Seo from '~/seo';

import Header from '~/components/global/header';

import Slide from '~/components/home/slide';

import Products from '~/components/home/products';

import Architect from '~/components/home/architect';

import Blog from '~/components/home/blog';

import Instagram from '~/components/home/instagram';

import Footer from '~/components/global/footer';

import { creators as creatorsHome } from '~/store/ducks/home';

import { creators as creatorsBlog } from '~/store/ducks/blog';

import { creators as creatorsProducts } from '~/store/ducks/products';

import { creators as creatorsContato } from '~/store/ducks/contact';

import { creators as creatorsPartners } from '~/store/ducks/partners';

const pageHome = () => (
  <>
    <Seo page="home" isRestWp={false} />

    <Header />

    <Slide />

    <Products />

    <Architect />

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

  if (!store.getState().blog.data) {
    store.dispatch(
      creatorsBlog.getRequest({
        per_page: '3',
        page: '1',
        category: ''
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

  if (!store.getState().partners.data) {
    store.dispatch(
      creatorsPartners.getRequest({
        page: 'partners'
      })
    );
  }
};

export default pageHome;
