import { createReducer } from 'reduxsauce';

import creator from '../util';

import { productsState } from '../interfaces';

import { put, all, takeLatest } from 'redux-saga/effects';

import 'isomorphic-unfetch';

import { URL_API } from '~/utils/config';

/**
 * Action types & creators
 */
export const types = {
  LOAD_REQUEST: 'LOAD_REQUEST_PRODUCTS',
  LOAD_SUCCESS: 'LOAD_SUCCESS_PRODUCTS',
  LOAD_FAILURE: 'LOAD_FAILURE_PRODUCTS'
};

export const creators = {
  getRequest: creator(types.LOAD_REQUEST),
  getSuccess: creator(types.LOAD_SUCCESS),
  getFailure: creator(types.LOAD_FAILURE)
};

/**
 * Handlers
 */
export const INITIAL_STATE: productsState = {
  data: null,
  loading: true,
  error: false
};

export interface iProducts {
  name: string;
  image: string;
}

export interface iProductsCats {
  category_name: string;
  products: iProducts[];
}

interface payload {
  type: string;
  payload: iProductsCats[];
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
function* getProductsSaga() {
  try {
    const response = yield fetch(`${URL_API}/acf/v3/pages/9`);

    const result = yield response.json();

    yield put(creators.getSuccess(result.acf.categories));
  } catch (err) {
    console.error(err);
    yield put(creators.getFailure(err));
  }
}

export function* productsSagas() {
  yield all([takeLatest(types.LOAD_REQUEST, getProductsSaga)]);
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [types.LOAD_REQUEST]: request,
  [types.LOAD_SUCCESS]: success,
  [types.LOAD_FAILURE]: failure
});
