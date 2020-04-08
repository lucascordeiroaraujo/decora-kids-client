import * as React from 'react';

// import Header from '~/components/global/header';

// import Slide from '~/components/home/slide';

// import Products from '~/components/home/products';

// import Blog from '~/components/home/blog';

// import Instagram from '~/components/global/instagram';

// import Footer from '~/components/global/footer';

import { Creators } from '~/store/ducks/home';

const pageHome: any = () => (
  <>
    <img
      src={require('~/public/images/decora-kids.png')}
      alt="Decora Kids"
      title="Decora Kids"
      width="241"
      height="71"
    />

    {/* <Header />

    <Slide />

    <Products />

    <Blog />

    <Instagram />

    <Footer /> */}
  </>
);

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

pageHome.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  store.dispatch(Creators.getRequest('index'));
};

export default pageHome;
