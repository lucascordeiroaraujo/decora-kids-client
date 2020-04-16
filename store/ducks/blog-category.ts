import { createReducer } from 'reduxsauce';

import creator from '../util';

import { blogCategoriesState } from '../interfaces';

import { put, all, takeLatest } from 'redux-saga/effects';

import 'isomorphic-unfetch';

import { URL_API } from '~/utils/config';

/**
 * Action types & creators
 */
export const types = {
  LOAD_REQUEST: 'LOAD_REQUEST_BLOG_CATEGORIES',
  LOAD_SUCCESS: 'LOAD_SUCCESS_BLOG_CATEGORIES',
  LOAD_FAILURE: 'LOAD_FAILURE_BLOG_CATEGORIES'
};

export const creators = {
  getRequest: creator(types.LOAD_REQUEST),
  getSuccess: creator(types.LOAD_SUCCESS),
  getFailure: creator(types.LOAD_FAILURE)
};

/**
 * Handlers
 */
export const INITIAL_STATE: blogCategoriesState = {
  data: null,
  loading: true,
  error: false
};

export interface Icats {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any;
  acf: any;
  _links: any;
}

interface payload {
  type: string;
  payload: Icats;
}

const request = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
  error: false
});

const success = (state = INITIAL_STATE, action: payload) => ({
  ...state,
  loading: false,
  data: action.payload
});

const failure = (state = INITIAL_STATE) => ({
  ...state,
  data: null,
  loading: false,
  error: true
});

/**
 * Sagas
 */
function* getBlogCategoriesSaga() {
  try {
    const response = yield fetch(`${URL_API}/wp/v2/blog-category&per_page=10`);

    const result = yield response.json();

    yield put(creators.getSuccess(result));
  } catch (err) {
    console.error(err);

    yield put(creators.getFailure(err));
  }
}

export function* blogCategoriesSagas() {
  yield all([takeLatest(types.LOAD_REQUEST, getBlogCategoriesSaga)]);
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [types.LOAD_REQUEST]: request,
  [types.LOAD_SUCCESS]: success,
  [types.LOAD_FAILURE]: failure
});
