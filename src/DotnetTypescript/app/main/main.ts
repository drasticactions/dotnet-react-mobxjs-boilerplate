import { createElement } from 'react';
import { render } from 'react-dom';
import { App } from './components/app';
import { AppState, ComponentState } from './state';

const content = document.getElementById('app');
const appState = new AppState();

export class MainApp {
    public startApp() {
        appState.component = new ComponentState();
        render(createElement(App, { appState: appState }), content);
	}
}