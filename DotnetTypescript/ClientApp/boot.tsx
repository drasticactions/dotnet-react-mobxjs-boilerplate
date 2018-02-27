import './css/site.css';
import 'bootstrap';
import { AppState } from './appState';
import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Route } from 'react-router-dom'
import { Router } from 'react-router'
import * as RoutesModule from './routes';
import { initializeIcons } from '@uifabric/icons';
import navigationStore from './navigationStore';

let routes = RoutesModule.routes;

declare var module: any;
const appState = new AppState();

const stores = {
    appState: appState,
};

initializeIcons();


function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
    ReactDOM.render(
        <AppContainer>
            <Provider {...stores}>
                <Router history={navigationStore.history} children={routes} basename={baseUrl} />
            </Provider>
        </AppContainer>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        renderApp();
    });
}
