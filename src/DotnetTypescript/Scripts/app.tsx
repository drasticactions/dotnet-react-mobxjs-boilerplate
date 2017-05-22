import * as React from "react";
import { Router, Route, Link } from 'react-router';
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";
import { AppState } from './appState';
import Calculator from './Calculator/calculator'
import TimerView from './Timer/timer'

@inject('router')
@inject('appState')
@observer
export class App extends React.Component< {router?: any, appState?: AppState} , {}> {
    render() {
        let { location } = this.props.router;
        return (<div>
            <span>Current pathname: {location.pathname}</span>
            <div>
                <button onClick={this.goToTimer}>
					Timer
				</button>
                <button onClick={this.goToCalculator}>
					Calculator
				</button>
                <button onClick={this.goBack}>
					Go Back
				</button>
            </div>
            <Route
					exact
					path="/"
                    render={(props) => <LazyRoute {...props} component={System.import('./Timer/timer')} />}
				/>
            <Route
					path="/calculator"
                     render={(props) => <LazyRoute {...props} component={System.import('./Calculator/calculator')} />}
				/>
        </div>);
    }

    goToCalculator = () => {
        let { push } = this.props.router;
        push('/calculator');
	}

    goToTimer = () => {
		let { push } = this.props.router;
        push('/');
	}

    goBack = () => {
		let { goBack  } = this.props.router;
        goBack();
	}
}