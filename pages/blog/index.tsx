import * as React from 'react';

import Header from '~/components/global/header';

import InternalTitle from '~/components/global/internalTitle';

import { Container } from '~/public/styles/global';

import Categories from '~/components/blog/categories';

import Posts from '~/components/blog/posts';

import Footer from '~/components/global/footer';

import { creators as creatorsBlog } from '~/store/ducks/blog';

import { creators as creatorsContato } from '~/store/ducks/contact';

const pageBlog = () => (
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

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

pageBlog.getInitialProps = async (props: Iprops) => {
  const { store } = props.ctx;

  if (!store.getState().blog.data) {
    store.dispatch(
      creatorsBlog.getRequest({
        per_page: '10'
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

export default pageBlog;
