import * as React from 'react';

import { useRouter } from 'next/router';

import Header from '~/components/global/header';

import Slide from '~/components/components/slide';

import Products from '~/components/components/products';

import Architect from '~/components/components/architect';

import Blog from '~/components/components/blog';

import Instagram from '~/components/components/instagram';

import Footer from '~/components/global/footer';

import { creators as creatorsHome } from '~/store/ducks/home';

import { creators as creatorsBlog } from '~/store/ducks/blog';

import { creators as creatorsProducts } from '~/store/ducks/products';

import { creators as creatorsContato } from '~/store/ducks/contact';

const pageHome = () => {
  const router = useRouter();

  return (
    <>
      {typeof router.query.showhome !== 'undefined' ? (
        <>
          <Header />

          <Slide />

          <Products />

          <Architect />

          <Blog />

          <Instagram />

          <Footer />
        </>
      ) : (
        <img
          src={require('~/public/images/decora-kids.png')}
          alt="Decora Kids"
          title="Decora Kids"
          width="241"
          height="71"
        />
      )}
    </>
  );
};

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
};

export default pageHome;
