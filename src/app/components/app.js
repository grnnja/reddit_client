import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import blue from '@material-ui/core/colors/blue'
import { middleware } from '../store/createMiddleware'
import configureStore from '../store/configureStore'
import PostWithComments from '../../interface/containers/postWithComments';
import SubredditPosts from '../../interface/components/subredditPosts'
import Authorization from '../../auth/components/authorization'
import RetrieveAccessToken from '../../auth/containers/retrieveAccessToken'
import ScrollToTop from './scrollToTop'

const store = configureStore(middleware);
store.subscribe(() => {
  console.log(store.getState())
})

const theme = createMuiTheme({
  typography: {
    fontfamily: 'Roboto'
  },
  palette: {
    primary: blue,
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route path="/r/:subredditName/post/:postId?" component={PostWithComments} />
              <Route path="/r/:subredditName/:sortType?" component={SubredditPosts} />
              <Route path="/auth/reddit-redir" component={RetrieveAccessToken} />
              <Route path="/auth/" component={Authorization} />
              <Route path="/" render={()=>(<Redirect to = "/r/all" />)} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  )
}

export default App
