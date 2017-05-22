import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {AppState} from '../appState';


@inject("appState")
@inject('router')
@observer
export default class Calculator extends React.Component<{router?: any, appState: AppState}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="adder-container">
                <h2>TEST</h2>
                <h3>Seconds passed: {this.props.appState.timer}</h3>
            </div>
        )
    }
}
