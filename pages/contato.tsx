import * as React from 'react';

import Header from '~/components/global/header';

import InternalTitle from '~/components/global/internalTitle';

import Map from '~/components/contact/map';

import From from '~/components/contact/form';

import Footer from '~/components/global/footer';

const Contact: any = () => (
  <>
    <Header />

    <InternalTitle title="Contato" />

    <Map />

    <From />

    <Footer />
  </>
);

export default Contact;
