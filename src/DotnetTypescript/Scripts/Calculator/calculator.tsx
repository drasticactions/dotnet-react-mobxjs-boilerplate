import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {AppState} from '../appState';
import DataWrapper from '../DataWrapper'
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
@inject("appState") @observer
export default class Calculator extends React.Component<{appState: AppState}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="adder-container">
                <h2>TEST</h2>
                <Link to="/">Timer</Link>
                <h3>Seconds passed: {this.props.appState.timer}</h3>
            </div>
        )
    }
}
