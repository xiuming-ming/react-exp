import React, { Component } from 'react';
//注册路由
import { Route, Switch } from 'react-router-dom'
import Params from '../../components/Query/Params'
import Query from '../../components/Query/Query'
import State from '../../components/Query/State'

class Proppage extends Component {

    state = {
        addClass: true
    }

    gotoParams =()=> {
        // params 传递参数 第一种写法
        // this.props.history.push('/state/params/1')
        // params 传递参数 第二种写法
        this.props.history.push({pathname:'/state/params/1'})
    }

    gotoQuery = () => {
        // query 传递参数 第一种写法
        // this.props.history.push('/state/query?id=1')
        // query 传递参数 第二种写法
        this.props.history.push({
            pathname:'/state/query',
            search: 'id=1'
        })
    }

    gotoState =() => {
        this.props.history.push({
            pathname:'/state/state',
            state: {
                id: '1'
            }
        })
    }

    render() {
        return (
            <div>
                <h3 className="name kiii">我是传参使用总结</h3>
                <div className={`title ${this.state.addClass ? 'remove' : 'add'}`}>111111</div>
                <div className={["title",this.state.addClass ? 'remove' : 'add'].join(' ')}>22222</div>
                <button onClick={this.gotoParams}>点击 使用params传参 展示路由的UI组件</button>
                <button onClick={this.gotoQuery}>点击 使用query传参 展示路由的UI组件</button>
                <button onClick={this.gotoState}>点击 使用state传参 展示路由的UI组件</button>
                {/* 组成路由 */}
                <Switch>
                    <Route path="/state/params/:id" component={Params}/>
                    <Route path="/state/query" component={Query}/>
                    <Route path="/state/state" component={State}/>
                </Switch>
            </div>
        );
    }
}

export default Proppage;