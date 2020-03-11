import * as React from 'react';

import Header from '~/components/global/header';

import Slide from '~/components/home/slide';

import Products from '~/components/home/products';

import Instagram from '~/components/global/instagram';

const Home: any = () => (
  <>
    <Header />
    <Slide />
    <Products />
    <Instagram />
  </>
);

export default Home;
