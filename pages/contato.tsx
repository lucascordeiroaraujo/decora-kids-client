import * as React from 'react';

import Seo from '~/seo';

import Header from '~/components/global/header';

import InternalTitle from '~/components/global/internalTitle';

import Map from '~/components/contact/map';

import Form from '~/components/contact/form';

import Footer from '~/components/global/footer';

import { creators as creatorsContato } from '~/store/ducks/contact';

import { creators as creatorsPartners } from '~/store/ducks/partners';

const pageContact = () => (
  <>
    <Seo page="contact" isRestWp={false} />

    <Header />

    <InternalTitle title="Contato" />

    <Map />

    <Form />

    <Footer />
  </>
);

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

pageContact.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

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

export default pageContact;
