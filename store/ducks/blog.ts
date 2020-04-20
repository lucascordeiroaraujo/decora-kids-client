import { createReducer } from 'reduxsauce';

import creator from '../util';

import { blogState, IBlogPost } from '../interfaces';

import { put, all, takeLatest } from 'redux-saga/effects';

import 'isomorphic-unfetch';

import { URL_API } from '~/utils/config';

interface IpropsBlog {
  per_page: string;
  page: string;
  category: string;
}

/**
 * Action types & creators
 */
export const types = {
  LOAD_REQUEST: 'LOAD_REQUEST_BLOG',
  LOAD_SUCCESS: 'LOAD_SUCCESS_BLOG',
  LOAD_FAILURE: 'LOAD_FAILURE_BLOG'
};

export const creators = {
  getRequest: creator<IpropsBlog>(types.LOAD_REQUEST),
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
function* getBlogSaga({ payload }: any) {
  try {
    let resultCat = '';

    if (payload.category) {
      const responseCat = yield fetch(
        `${URL_API}/wp/v2/blog-category&slug=${payload.category}`
      );

      resultCat = yield responseCat.json();
    }

    const response = yield fetch(
      `${URL_API}/wp/v2/blog&per_page=${payload.per_page}&page=${payload.page}${
        payload.category ? `&blog-category=${resultCat}` : ''
      }`
    );

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
