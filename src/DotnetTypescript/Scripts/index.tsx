import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router-dom'
import { App } from './App';
import { AppState } from './appState'
import { AppContainer } from 'react-hot-loader'

const browserHistory = createBrowserHistory();

const routingStore = new RouterStore();
const appState = new AppState();
const main = document.getElementById('app')
const stores = {
  router: routingStore,
  appState: appState
};

const history = syncHistoryWithStore(browserHistory, stores.router);
const render = (App) => ReactDOM.render(<AppContainer><Router history={history}><Provider {...stores}><App/></Provider></Router></AppContainer>, main)
render(App)

if (module.hot) {
    module.hot.accept(() => render(App));
}