import { combineReducers } from 'redux';
import authReducers from '../../auth/reducers/index';

const rootReducer = combineReducers({
  auth: authReducers
});

export default rootReducer;
