import { combineReducers } from 'redux';
import { catReducer } from './cat_reducer';
import { userReducer } from './user_reducer';

export default combineReducers({

  cats: catReducer,
  user: userReducer
});
