import React from 'react';

import BlogItem from '~/components/home/blog/components/item';

import Posts from './style';

const cpPosts: React.FC = () => (
  <Posts>
    <BlogItem />

    <BlogItem />

    <BlogItem />

    <BlogItem />
  </Posts>
);

export default cpPosts;
