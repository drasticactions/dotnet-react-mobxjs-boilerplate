import { observable } from 'mobx';
import { observer } from 'mobx-react';

abstract class BaseState {
    @observable isLoading = false;

    setLoading(_isLoading: boolean) {
        this.isLoading = _isLoading;
    }
}

export class AppState extends BaseState {
    public component: ComponentState;
}

export class ComponentState extends BaseState {

}