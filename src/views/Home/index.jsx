import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import PropPage from '../../views/PropPage'

export default class Menu extends Component {
    
    state = {
        list: [
            {name: 'Prop 使用', path: '/propPage'},
            {name: '传参使用', path: ''},
            {name: 'Redux使用', path: ''}
        ]
    }
    gotoPath =(list) => {
        this.props.history.push('/propPage')
    }
    render() {
        console.log(this.props, '88')
        return (
            <div>
                <ul>
                {
                    this.state.list.map((list) => {
                        return <li onClick={() => this.gotoPath(list)} key={list.name}>{list.name}</li>
                    })
                }
                </ul>
                <Switch>
                    <Route path="/propPage" component={PropPage} />
                </Switch>
            </div>
        );
    }
}
