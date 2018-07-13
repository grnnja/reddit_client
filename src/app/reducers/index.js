import { combineReducers } from 'redux';
import authReducer from '../../auth/reducers/index';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
