import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
import { browserHistory } from 'react-router';
import navigationStore from '../navigationStore';

export class NavMenu extends React.Component<{}, {}> {
    
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    public render() {
        return <div className='nav'>  <Nav groups={[{
            links: [
              {
                name: 'Home',
                key: 'key1',
                url: '/',
                onClick: this.onClickHandler
              },
              {
                name: 'Home Again',
                key: 'key2',
                url: '/again',
                onClick: this.onClickHandler
              }]
          }]} /></div>;
    }

    private onClickHandler(e: any, element: any) {
        e.preventDefault();
        navigationStore.push(element.url);
        return false;
     }
}
