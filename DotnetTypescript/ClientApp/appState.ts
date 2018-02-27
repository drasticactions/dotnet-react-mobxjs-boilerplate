import { observable } from 'mobx';

export class AppState {
    @observable currentCount: number = 0;
}