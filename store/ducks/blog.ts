import { createReducer } from 'reduxsauce';

import creator from '../util';

import { blogState } from '../interfaces';

import { put, all, takeLatest } from 'redux-saga/effects';

import 'isomorphic-unfetch';

import { URL_API } from '~/utils/config';

/**
 * Action types & creators
 */
export const types = {
  LOAD_REQUEST: 'LOAD_REQUEST_BLOG',
  LOAD_SUCCESS: 'LOAD_SUCCESS_BLOG',
  LOAD_FAILURE: 'LOAD_FAILURE_BLOG'
};

export const creators = {
  getRequest: creator(types.LOAD_REQUEST),
  getSuccess: creator(types.LOAD_SUCCESS),
  getFailure: creator(types.LOAD_FAILURE)
};

/**
 * Handlers
 */
export const INITIAL_STATE: blogState = {
  data: null,
  loading: true,
  error: false
};

export interface Ipost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  parent: number;
  template: string;
  'blog-category': number[];
  acf: {
    subtitle: string;
    image: any;
    description: string;
    author: {
      ID: number;
      user_firstname: string;
      user_lastname: string;
      nickname: string;
      user_nicename: string;
      display_name: string;
      user_email: string;
      user_url: string;
      user_registered: string;
      user_description: string;
      user_avatar: string;
    };
    seo_title: string;
    seo_description: string;
    seo_image: string;
  };
}

interface payload {
  type: string;
  payload: Ipost;
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
function* getBlogSaga() {
  try {
    const response = yield fetch(`${URL_API}/wp/v2/blog&per_page=10`);

    const result = yield response.json();

    yield put(creators.getSuccess(result));
  } catch (err) {
    console.error(err);

    yield put(creators.getFailure(err));
  }
}

export function* blogSagas() {
  yield all([takeLatest(types.LOAD_REQUEST, getBlogSaga)]);
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [types.LOAD_REQUEST]: request,
  [types.LOAD_SUCCESS]: success,
  [types.LOAD_FAILURE]: failure
});
