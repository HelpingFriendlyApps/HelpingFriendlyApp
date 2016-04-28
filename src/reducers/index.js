import { combineReducers } from 'redux';
import counter from './counter'; // whatever i import this as is the name of the property in state
import tour from './tour';
import setlist from './setlist';

const rootReducer = combineReducers({
  counter,
  tour,
  setlist
});

export default rootReducer;
