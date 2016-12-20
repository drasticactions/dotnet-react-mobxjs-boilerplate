import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { AppState, ComponentState } from '../state';

@observer
export class App extends React.Component<{ appState: AppState }, {}> {

    render() {
        return (
            <div>
                <h2>Main App</h2>
                <p>Is Loading: {this.props.appState.isLoading.toString()}</p>
                <button onClick={() => this.changeLoadingState()}>Change App Loading State</button>
                <AppComponent appState={this.props.appState} componentState={this.props.appState.component}></AppComponent>
            </div>
        );
    }

    changeLoadingState() {
        this.props.appState.isLoading = !this.props.appState.isLoading;
    }
};

@observer
export class AppComponent extends React.Component<{ appState: AppState, componentState: ComponentState }, any> {

    render() {
        let { appState, componentState } = this.props;
        return (
            <div>
                <h3>Component</h3>
                <p>Is Component Loading: {componentState.isLoading.toString()}</p>
                <p>Is App Loading: {appState.isLoading.toString()}</p>
                <button onClick={() => this.changeAppLoadingState()}>Change App Loading State (From Component)</button>
                <button onClick={() => this.changeLoadingState()}>Change Component Loading State</button>
            </div>
        );
    }

    changeAppLoadingState() {
        this.props.appState.isLoading = !this.props.appState.isLoading;
    }

    changeLoadingState() {
        let { componentState } = this.props;
        componentState.isLoading = !componentState.isLoading;
    }
};
