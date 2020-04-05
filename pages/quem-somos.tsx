import * as React from 'react';

import Seo from '~/seo';

import Header from '~/components/global/header';

import Description from '~/components/about/description';

import Footer from '~/components/global/footer';

import { creators } from '~/store/ducks/about';

const pageAbout = () => (
  <>
    <Seo page="about" />

    <Header />

    <Description />

    <Footer />
  </>
);

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

pageAbout.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  if (!store.getState().about.data) {
    store.dispatch(
      creators.getRequest({
        page: 'about'
      })
    );
  }
};

export default pageAbout;
