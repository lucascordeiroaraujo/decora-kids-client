import { combineReducers } from 'redux';

import global from './ducks/global';

import about from './ducks/about';

import contact from './ducks/contact';

export default combineReducers({
  global,
  about,
  contact
});
