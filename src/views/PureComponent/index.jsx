import React, { PureComponent } from 'react';

export default class Pure extends PureComponent {

    state = {
        userName: 'xiao wang'
    }

    changeName =() => {
        this.setState({
            userName: 'xiao ming' 
        })
    }

    render() {
        console.log('父组件更新')
        return (
            <div>
                <h2>父组件</h2>
                <h3>PureComponent 使用</h3>
                <h5>当父组件中state的数据进行了更新操作 但是子组件没有使用此字段，则子组件不进行render操作</h5>
                <div>我的名字是---{this.state.userName}</div>
                <button onClick={this.changeName}>点击改变名字</button>
                <Child userName={this.state.userName}/>
            </div>
        );
    }
}

class Child extends PureComponent {
    render() {
        console.log('子组件更新')
        return (
            <div>
                <h2>我是子组件</h2>
                {this.props.userName}
            </div>
        );
    }
}

