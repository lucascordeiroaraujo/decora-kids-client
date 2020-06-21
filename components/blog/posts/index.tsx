import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import { IBlogPost } from '~/store/interfaces';

import BlogItem from '~/components/home/blog/components/item';

import Posts from './style';

const cpPosts: React.FC = () => {
  const { error, blog } = useSelector((state: applicationState) => ({
    error: state.blog.error,
    blog: state.blog.data
  }));

  if (error) return null;

  return (
    <Posts>
      {blog.map((post: IBlogPost) => (
        <BlogItem key={post.id} {...post} />
      ))}
    </Posts>
  );
};

export default cpPosts;
