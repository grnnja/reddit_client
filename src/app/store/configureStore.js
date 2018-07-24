import rootReducer from '../reducers/index';
import { createStore, compose } from 'redux';
import { loadState, saveState } from '../localStorage'
import throttle from "lodash/throttle";

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
