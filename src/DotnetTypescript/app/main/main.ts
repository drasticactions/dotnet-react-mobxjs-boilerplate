import { createElement } from 'react';
import { render } from 'react-dom';
import { TimerView, AppState } from './components/main';

const content = document.getElementById('app');
const appState = new AppState();

export class MainApp {
	public startApp() {
		render(createElement(TimerView, { appState: appState }), content);
	}
}