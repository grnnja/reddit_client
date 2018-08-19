import { createStore, compose } from 'redux';
import throttle from "lodash/throttle";
import rootReducer from '../reducers/index';
import { loadState, saveState } from '../localStorage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default (initialState) => {
  const persistedState = loadState()
  let store = createStore(rootReducer, persistedState, composeEnhancers(initialState));

  store.subscribe(throttle(() => {
    saveState({
      // only save the state of the objects we want to persist
      auth: store.getState().auth
    })
  }, 1000))

  return store
};
