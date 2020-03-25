import * as React from 'react';

import Header from '~/components/global/header';

import InternalTitle from '~/components/global/internalTitle';

import Map from '~/components/contact/map';

import Form from '~/components/contact/form';

import Footer from '~/components/global/footer';

const pageContact: React.FC = () => (
  <>
    <Header />

    <InternalTitle title="Contato" />

    <Map />

    <Form />

    <Footer />
  </>
);

export default pageContact;
