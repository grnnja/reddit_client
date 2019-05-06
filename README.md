# Client for Reddit
When I first started this project, the official desktop Reddit client looked dated, many image and video hosting sites were not supported, you could not infinitely scroll, and it lacked fullsize images like in the mobile experience.
## The problems that I solved:
* Authenticating through OAuth2
* Retrieving data from Reddit with JSON and the Reddit API
* Displaying different media formats from different sites
* Linking the client and user to Reddit to upvote and downvote posts.
## Architecture
### Client
Key Libraries
* [React](https://reactjs.org/)[/](https://github.com/reduxjs/react-redux)[Redux](https://redux.js.org/)
* [Material UI](https://material-ui.com/)
* [Axios](https://github.com/axios/axios)
### Server
Needed a server to circumvent CORS
* Acts a proxy
* [Reddit authentication needs to come from a server for Reddit to consider the request legitimate](https://github.com/reddit-archive/reddit/wiki/oauth2#authorization-implicit-grant-flow "Reddit app types")

Key library
* [Express](https://expressjs.com/)

## Installation
1. Clone [client](https://github.com/grnnja/reddit_client) and [server](https://github.com/grnnja/reddit_oauth_proxy_server)
2. Get a Reddit client ID and client secret from [Reddit](https://www.reddit.com/prefs/apps) by clicking "create an app" near the bottom of the page and choosing web app. The client ID is immediatly after "web app". To get the secret click "edit" and secret is the first entry.
3. In the downloaded reddit_client repository open src/keys.js and change REDDIT_CLIENT_ID to the client ID and REDDIT_CLIENT_SECRET to the secret
4. in the reddit_oauth_proxy_server directory run `npm install`
5. in the reddit_client directory run `npm install`
## Running
1. in the reddit_oauth_proxy_server directory run `npm start`
2. in the reddit_client directory run `npm start`
