import * as React from 'react';

import Header from '~/components/global/header';

import InternalTitle from '~/components/global/internalTitle';

import { Container } from '~/public/styles/global';

import Categories from '~/components/blog/categories';

import Posts from '~/components/blog/posts';

import Footer from '~/components/global/footer';

const pageContact: any = () => (
  <>
    <Header />

    <InternalTitle title="Dicas da<br/> Girafinha" />

    <Container>
      <Categories />

      <Posts />
    </Container>

    <Footer />
  </>
);

export default pageContact;
