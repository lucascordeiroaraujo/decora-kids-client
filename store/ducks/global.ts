import { createReducer } from 'reduxsauce';

import creator from '../util';

import { globalState } from '../interfaces';

import 'isomorphic-unfetch';

/**
 * Action types & creators
 */
export const types = {
  SET_FEEDBACK_FORM: 'SET_FEEDBACK_FORM'
};

export const creators = {
  getRequest: creator(types.SET_FEEDBACK_FORM)
};

/**
 * Handlers
 */
export const INITIAL_STATE: globalState = {
  feedbackForm: {
    showModal: false,
    showLoader: false,
    loaderLabel: ''
  }
};

interface payload {
  type: string;
  payload: {
    showModal: boolean;
    showLoader: boolean;
    loaderLabel: string;
  };
}

const setFeedbackForm = (state = INITIAL_STATE, action: payload) => ({
  ...state,
  feedbackForm: {
    ...state.feedbackForm,
    ...action.payload
  }
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [types.SET_FEEDBACK_FORM]: setFeedbackForm
});
