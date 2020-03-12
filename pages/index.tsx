import * as React from 'react';

import Header from '~/components/global/header';

import Slide from '~/components/home/slide';

import Products from '~/components/home/products';

import Blog from '~/components/home/blog';

import Instagram from '~/components/global/instagram';

import Footer from '~/components/global/footer';

const Home: any = () => (
  <>
    <Header />

    <Slide />

    <Products />

    <Blog />

    <Instagram />

    <Footer />
  </>
);

export default Home;
