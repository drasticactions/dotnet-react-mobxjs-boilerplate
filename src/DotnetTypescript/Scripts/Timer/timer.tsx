import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import {AppState} from '../appState';
import DataWrapper from '../DataWrapper'

@inject("appState") @observer
export default class TimerView extends React.Component<{appState: AppState }, {}> {
	appState: AppState;

	constructor(props) {
		super(props);
		this.appState = this.props.appState;
	}

	render() {
		return (
            <div>
                <h2>Test 2</h2>
				<Link to="/calculator">Calc</Link>
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
