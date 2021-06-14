import React, { Component } from 'react';

export default class Menu extends Component {
    state = {
        list: [
            {name: 'Prop 使用', path: ''},
            {name: '传参使用', path: ''},
            {name: 'Redux使用', path: ''},
        ]
    }
    gotoPath =(list) => {
        
    }
    render() {
        return (
            <div>
                <ul>
                {
                    this.state.list.map((list) => {
                        return <li onClick={() => this.gotoPath(list)} key={list.name}>{list.name}</li>
                    })
                }
                </ul>
            </div>
        );
    }
}
