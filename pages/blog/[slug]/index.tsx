import * as React from 'react';

import Seo from '~/seo';

import Header from '~/components/global/header';

import Post from '~/components/blog/post';

import Footer from '~/components/global/footer';

import { creators as creatorsBlogPost } from '~/store/ducks/blog-post';

import { creators as creatorsContato } from '~/store/ducks/contact';

import { creators as creatorsPartners } from '~/store/ducks/partners';

const pageBlogPost = () => (
  <>
    <Seo page="blogPost" isRestWp={true} />

    <Header />

    <Post />

    <Footer />
  </>
);

interface Iprops {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

pageBlogPost.getInitialProps = async (props: Iprops) => {
  const { store, query } = props.ctx;

  if (!store.getState().blogPost.data) {
    store.dispatch(
      creatorsBlogPost.getRequest({
        slug: query.slug
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

  if (!store.getState().partners.data) {
    store.dispatch(
      creatorsPartners.getRequest({
        page: 'partners'
      })
    );
  }
};

export default pageBlogPost;
