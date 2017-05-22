import * as React from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";
import { AppState } from './appState';
import Calculator from './Calculator/calculator'
import TimerView from './Timer/timer'

@withRouter @inject('appState') @observer
export class App extends React.Component< {appState?: AppState} , {}> {
    render() {
        return (<div>
            <DevTools />
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
}