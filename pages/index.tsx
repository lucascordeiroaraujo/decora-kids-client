import * as React from 'react';

import Header from '~/components/global/header';

import Slide from '~/components/home/slide';

import Products from '~/components/home/products';

import Blog from '~/components/home/blog';

import Instagram from '~/components/global/instagram';

import Footer from '~/components/global/footer';

// import { creators } from '~/store/ducks/home';

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

// interface Iprops {
//   dispatch: any;
//   ctx: any;
//   getInitialProps: any;
// }

// pageHome.getInitialProps = async (props: Iprops) => {
//   const { store } = props.ctx;

//   store.dispatch(creators.getRequest('index'));
// };

export default pageHome;
