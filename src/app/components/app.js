import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { middleware } from "../store/createMiddleware"
import configureStore from "../store/configureStore"
import Subreddit from '../../components/subreddit';
//import OAuthRequest from "../../../src/auth/components/oauthRequest"
import rootReducer from "../reducers/index"
import Authorization from "../../auth/components/authorization"
import RetrieveAccessToken from "../../auth/containers/retrieve_access_token"

export const store = configureStore(middleware);

export default class App extends Component {
  render() {
    return(
      <Provider store={store} >
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/r/:subreddit_name" component={Subreddit} />
              <Route path="/auth/reddit-redir" component={RetrieveAccessToken} />
              <Route path="/auth/" component={Authorization} />
              
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
