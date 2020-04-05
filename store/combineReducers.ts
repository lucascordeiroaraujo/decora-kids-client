import { combineReducers } from 'redux';

import home from './ducks/home';

import about from './ducks/about';

export default combineReducers({
  home,
  about
});
