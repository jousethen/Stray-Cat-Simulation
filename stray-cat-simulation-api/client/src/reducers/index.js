import { combineReducers } from 'redux';
import { catReducer } from './cat_reducer';
export default combineReducers({
  cats: catReducer,
});
