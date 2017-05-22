import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import {AppState} from '../appState';


@inject("appState")
@inject('router')
@observer
export default class TimerView extends React.Component<{router?: any, appState: AppState }, {}> {
	appState: AppState;

	constructor(props) {
		super(props);
		this.appState = this.props.appState;
	}

	render() {
		return (
            <div>
                <h2>Test 2</h2>
				<button onClick={this.onReset}>
					Seconds passed: {this.appState.timer}
				</button>
				
			</div>
		);
	}

	onReset = () => {
		this.appState.resetTimer();
	}
};
