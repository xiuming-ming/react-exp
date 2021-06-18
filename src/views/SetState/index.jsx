import React, { Component } from 'react';

export default class PubsubData extends Component {

    state= {
        count: 0
    }

    // setState 更新状态为异步更新的 所以setState 有可选的第二个可选参数  为回调函数 callback
    // 对象式的setState
    add = () => {
        this.setState({
            count: this.state.count + 1
        }, ()=> {
            // 当状态及界面更新完成后 执行回调
            console.log(this.state.count, '66')
        })
        console.log(this.state.count, '55')
    }
    // 函数式的setState
    addTwo = () => {
        this.setState(()=> {
            return {count: this.state.count + 2}
        }, ()=> {
            console.log(this.state.count, '77')
        })
    }

    render() {
        return (
            <div>
                <h3>SetState 使用总结</h3>
                <div>{this.state.count}</div>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.addTwo}>点我+2</button>
            </div>
        );
    }
}