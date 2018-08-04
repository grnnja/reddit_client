import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { middleware } from "../store/createMiddleware"
import configureStore from "../store/configureStore"
import PostWithComments from '../../interface/containers/postWithComments';
import SubredditPosts from '../../interface/components/subredditPosts'
import Authorization from "../../auth/components/authorization"
import RetrieveAccessToken from "../../auth/containers/retrieveAccessToken"

const store = configureStore(middleware);
store.subscribe(() => {
  console.log(store.getState())})
export default class App extends Component {
  render() {
    return(
      <Provider store={store} >
        <BrowserRouter>
            <Switch>
              <Route path="/r/:subreddit_name/post/:post_id?" component={PostWithComments} />
              <Route path="/r/:subreddit_name/" component={SubredditPosts} />
              <Route path="/auth/reddit-redir" component={RetrieveAccessToken} />
              <Route path="/auth/" component={Authorization} />
            </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
