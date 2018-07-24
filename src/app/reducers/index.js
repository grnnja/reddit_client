import { combineReducers } from 'redux';
import authReducers from '../../auth/reducers/index';
import interfaceReducers from '../../interface/reducers/index'

const rootReducer = combineReducers({
  auth: authReducers,
  interface: interfaceReducers
});

export default rootReducer;
