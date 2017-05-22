import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { App } from './App';
import { AppState } from './appState'
import { AppContainer } from 'react-hot-loader'

declare var module: any;

const browserHistory = createBrowserHistory();

const routingStore = new RouterStore();
const appState = new AppState();
const main = document.getElementById('app')
const stores = {
  appState: appState,
  history: browserHistory
};

const render = (App) => ReactDOM.render(<AppContainer><Provider {...stores}><Router history={browserHistory}><App/></Router></Provider></AppContainer>, main)
render(App)

if (module.hot) {
    module.hot.accept(() => render(App));
}