import { createReducer } from 'reduxsauce';

import creator from '../util';

import { HomeState } from '../interfaces';

interface IpropsRequest {
  name: string;
}

/**
 * Action types & creators
 */
export const Types = {
  LOAD_REQUEST: '@home/LOAD_REQUEST_HOME',
  LOAD_SUCCESS: '@home/LOAD_SUCCESS_HOME',
  LOAD_FAILURE: '@home/LOAD_FAILURE_HOME'
};

export const Creators = {
  getRequest: creator<IpropsRequest>(Types.LOAD_REQUEST),
  getSuccess: creator(Types.LOAD_SUCCESS),
  getFailure: creator(Types.LOAD_FAILURE)
};

/**
 * Handlers
 */
export const INITIAL_STATE: HomeState = {
  data: null,
  loading: true,
  error: false
};

const request = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
  error: false
});

const success = (state = INITIAL_STATE, action: any) => ({
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
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.LOAD_REQUEST]: request,
  [Types.LOAD_SUCCESS]: success,
  [Types.LOAD_FAILURE]: failure
});
