import { combineReducers } from 'redux';
import counter from './counter';
import tour from './tour';
import setlist from './setlist';

const rootReducer = combineReducers({
  counter,
  tour,
  setlist
});

export default rootReducer;
