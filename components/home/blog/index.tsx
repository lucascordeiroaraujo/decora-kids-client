import React from 'react';

import Blog from './style';

import { Container } from '~/public/styles/global';

import BlogItem from './components/item';

import Fade from 'react-reveal/Fade';

const cpBlog: React.FC = () => (
  <Blog>
    <Container className="container">
      <h1 className="sr-only">Blog</h1>

      <div>
        <BlogItem />

        <BlogItem />

        <BlogItem />
      </div>

      <Fade bottom>
        <a href="/blog" title="Confira">
          Veja todas as dicas da girafinha &gt;&gt;
        </a>
      </Fade>
    </Container>
  </Blog>
);

export default cpBlog;
