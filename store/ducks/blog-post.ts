import { createReducer } from 'reduxsauce';

import creator from '../util';

import { blogPostState, IBlogPost } from '../interfaces';

import { put, all, takeLatest } from 'redux-saga/effects';

import 'isomorphic-unfetch';

import { URL_API } from '~/utils/config';

interface IpropsBlogPost {
  slug: string;
}

/**
 * Action types & creators
 */
export const types = {
  LOAD_REQUEST: 'LOAD_REQUEST_BLOG_POST',
  LOAD_SUCCESS: 'LOAD_SUCCESS_BLOG_POST',
  LOAD_FAILURE: 'LOAD_FAILURE_BLOG_POST'
};

export const creators = {
  getRequest: creator<IpropsBlogPost>(types.LOAD_REQUEST),
  getSuccess: creator(types.LOAD_SUCCESS),
  getFailure: creator(types.LOAD_FAILURE)
};

/**
 * Handlers
 */
export const INITIAL_STATE: blogPostState = {
  data: null,
  loading: true,
  error: false
};

interface payload {
  type: string;
  payload: IBlogPost;
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
function* getBlogPostSaga({ payload }: any) {
  try {
    const response = yield fetch(`${URL_API}/wp/v2/blog&slug=${payload.slug}`);

    const result = yield response.json();

    yield put(creators.getSuccess(result.shift()));
  } catch (err) {
    console.error(err);

    yield put(creators.getFailure(err));
  }
}

export function* blogPostSagas() {
  yield all([takeLatest(types.LOAD_REQUEST, getBlogPostSaga)]);
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [types.LOAD_REQUEST]: request,
  [types.LOAD_SUCCESS]: success,
  [types.LOAD_FAILURE]: failure
});
