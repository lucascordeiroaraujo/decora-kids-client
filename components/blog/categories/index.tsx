import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import { Icats } from '~/store/ducks/blog-category';

import Categories from './style';

import Cat from './components/cat';

import { useRouter } from 'next/router';

const cpCategories: React.FC = () => {
  const router = useRouter();

  const { error, categories } = useSelector((state: applicationState) => ({
    error: state.blogCategories.error,
    categories: state.blogCategories.data
  }));

  if (error) return null;

  return (
    <Categories>
      {categories.map((cat: Icats) => (
        <Cat
          key={cat.id}
          title={cat.name}
          slug={cat.slug}
          active={
            typeof router.query.slug !== 'undefined' &&
            router.query.slug === cat.slug
              ? true
              : false
          }
        />
      ))}
    </Categories>
  );
};

export default cpCategories;
