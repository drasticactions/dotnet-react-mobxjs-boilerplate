import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

export class HomeAppState {
    @observable timer = 0;
    constructor() {
        setInterval(() => { this.timer += 1; }, 1000);
    }
    resetTimer() {
        this.timer = 0;
    }
}

@observer
export class Home extends React.Component<{}, {}> {

    @observable appState: HomeAppState = new HomeAppState();

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.appState.timer}
                </button>
            </div>
        );
    }

    onReset = () => {
        this.appState.resetTimer();
    }
}
