import { combineReducers } from 'redux';

import global from './ducks/global';

import home from './ducks/home';

import about from './ducks/about';

import products from './ducks/products';

import blog from './ducks/blog';

import blogCategories from './ducks/blog-category';

import blogPost from './ducks/blog-post';

import contact from './ducks/contact';

export default combineReducers({
  global,
  home,
  about,
  products,
  blog,
  blogCategories,
  blogPost,
  contact
});
