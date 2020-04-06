import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import { Ipost } from '~/store/ducks/blog';

import BlogItem from '~/components/home/blog/components/item';

import Posts from './style';

const cpPosts: React.FC = () => {
  const { error, blog } = useSelector((state: applicationState) => ({
    error: state.about.error,
    blog: state.blog.data
  }));

  if (error) return null;

  return (
    <Posts>
      {blog.map((post: Ipost, index: number) => (
        <BlogItem key={index} {...post} />
      ))}
    </Posts>
  );
};

export default cpPosts;
