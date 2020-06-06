import * as React from 'react';

import Seo from '~/seo';

import Header from '~/components/global/header';

import InternalTitle from '~/components/global/internalTitle';

import { Container } from '~/public/styles/global';

import Description from './components/description';

import Gallery from './components/gallery';

import Footer from '~/components/global/footer';

import { creators as creatorsAbout } from '~/store/ducks/about';

import { creators as creatorsContato } from '~/store/ducks/contact';

const pageAbout = () => (
  <>
    <Seo page="about" isRestWp={false} />

    <Header />

    <InternalTitle title="Quem Somos?" />

    <Container>
      <Description />

      <Gallery />
    </Container>

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
      creatorsAbout.getRequest({
        page: 'about'
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

export default pageAbout;