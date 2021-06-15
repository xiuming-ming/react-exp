import React, { Component } from 'react';

export default class Menu extends Component {
    
    state = {
        list: [
            {name: 'Prop校验使用', path: '/propPage'},
            {name: '传参使用总结', path: '/state'},
            {name: 'Redux使用', path: '/reduxPage'}
        ]
    }
    gotoPath =(list) => {
        this.props.history.push(list.path)
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
