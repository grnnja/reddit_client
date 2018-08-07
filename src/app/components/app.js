import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { middleware } from '../store/createMiddleware'
import configureStore from '../store/configureStore'
import PostWithComments from '../../interface/containers/postWithComments';
import SubredditPosts from '../../interface/components/subredditPosts'
import Authorization from '../../auth/components/authorization'
import RetrieveAccessToken from '../../auth/containers/retrieveAccessToken'

const store = configureStore(middleware);
store.subscribe(() => {
  console.log(store.getState())})
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/r/:subredditName/post/:postId?" component={PostWithComments} />
          <Route path="/r/:subredditName/:sortType?" component={SubredditPosts} />
          <Route path="/auth/reddit-redir" component={RetrieveAccessToken} />
          <Route path="/auth/" component={Authorization} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
