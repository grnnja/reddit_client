import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Subreddit from '../../components/subreddit';
import OAuthRequest from "../../../src/auth/components/oauthRequest"
import authReducers from "../../../src/auth/reducers/index"

const createStoreWithMiddleware = applyMiddleware()(createStore)

export default class App extends Component {
  render() {
    return(
      <Provider store={createStoreWithMiddleware(authReducers)}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/r/subreddit_name" component={Subreddit} />
              <Route path="/auth/" component={OAuthRequest} />

            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}