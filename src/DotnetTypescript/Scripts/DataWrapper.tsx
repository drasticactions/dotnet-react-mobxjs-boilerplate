import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import {AppState} from './AppState';

export default function DataWrapper(Component: any): any {
    @inject('appState') @observer
    class DataFetcher extends React.Component<any, any> {
        store: AppState;

        constructor(props) {
            super(props);
            this.store = this.props.appState;
        }

        componentDidMount() {
            console.log(this.props);
            let pathname = this.props.match.url;
            let id = this.props.match.id ? this.props.match.id : null;
            this.store.resetTimer();
            //this.store.fetchData(pathname, id);
        }

        componentWillUnmount() {
            this.store.resetTimer();
        }

        render() {
            return <Component {...this.props} />;
        }

    }
    return DataFetcher;
}