import * as React from 'react';

import Header from '~/components/global/header';

import InternalTitle from '~/components/global/internalTitle';

import { Container } from '~/public/styles/global';

import Categories from '~/components/blog/categories';

import Posts from '~/components/blog/posts';

import Footer from '~/components/global/footer';

import { creators as creatorsBlog } from '~/store/ducks/blog';

import { creators as creatorsBlogCategories } from '~/store/ducks/blog-category';

import { creators as creatorsContato } from '~/store/ducks/contact';

const pageBlog = () => (
  <>
    <Header />

    <InternalTitle title="Nosso<br/> Cantinho" />

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
  const { store, query } = props.ctx;

  if (!store.getState().blog.data) {
    store.dispatch(
      creatorsBlog.getRequest({
        per_page: '10',
        page: typeof query.page !== 'undefined' ? query.page : '1',
        category: typeof query.slug !== 'undefined' ? query.slug : ''
      })
    );
  }

  if (!store.getState().blogCategories.data) {
    store.dispatch(
      creatorsBlogCategories.getRequest({
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
