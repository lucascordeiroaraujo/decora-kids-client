import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import { Ipost } from '~/store/ducks/blog';

import Blog from './style';

import { Container } from '~/public/styles/global';

import BlogItem from './components/item';

import Fade from 'react-reveal/Fade';

const cpBlog: React.FC = () => {
  const { error, blog } = useSelector((state: applicationState) => ({
    error: state.about.error,
    blog: state.blog.data
  }));

  if (error) return null;

  return (
    <Blog>
      <Container className="container">
        <h1 className="sr-only">Blog</h1>

        <div className={blog.length <= 2 ? 'centered' : ''}>
          {blog.slice(0, 3).map((post: Ipost, index: number) => (
            <BlogItem key={index} {...post} />
          ))}
        </div>

        <Fade bottom>
          <a href="/blog" title="Confira">
            Veja todas as dicas da girafinha &gt;&gt;
          </a>
        </Fade>
      </Container>
    </Blog>
  );
};

export default cpBlog;
