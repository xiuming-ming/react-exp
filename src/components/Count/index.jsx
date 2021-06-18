import React, { Component } from 'react';

export default class Count extends Component {
    increment = () => {
        const { value }= this.selectNumber
        this.props.add(value*1)
    }
    decrement = () => {
        const { value }= this.selectNumber
        this.props.jian(value*1)
    }
    incrementIfOdd = () => {
        const { value }= this.selectNumber 
        if (this.props.count.he % 2 !== 0) {
            this.props.add(value*1)
        } 
    } 
    // 异步加
    incrementAsync = ()=> {
        const { value }= this.selectNumber
        this.props.addAsync(value *1, 500)
    } 
    render() {
        return (
            <div>
                <h1>我是Count组件</h1>
                <h2>Person 组件中 列表的长度为{this.props.count.rens.length}</h2>
                <h3>当前求和为：{this.props.count.he}</h3>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}
