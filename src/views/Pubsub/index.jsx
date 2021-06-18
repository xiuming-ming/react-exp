import React, { Component } from 'react';
import Pubsub from 'pubsub-js'

export default class PubsubData extends Component {
    render() {
        return (
            <div>
                <h2>兄弟之间传参示例</h2>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

// 实现在Header组件中发布消息  在组件Footer组件中订阅消息
class Header  extends Component {

    setPub () {
        Pubsub.publish('pubData', {name: 'xiuming.wang', age: 18})
    }

    render() {
        return (
            <div>
                <h3>我是头组件</h3>
                <button onClick={this.setPub}>点击我给Footer组件发布消息</button>
            </div>
        );
    }
}
class Footer  extends Component {

    state = {

    }

    // 进行消息订阅
    componentDidMount () {
        Pubsub.subscribe('pubData',(msg, data) => {
            console.log(msg, data, '66')
            this.setState({name: data.name, age: data.age})
        })
    }

    render() {
        return (
            <div>
                <h3>我是底部组件</h3>
                我接受的数据 name---{this.state.name},  age--- {this.state.age}
            </div>
        );
    }
}
