import React, { Component, Fragment } from 'react';

/*
* 完成 父子孙 组件之间的数据传递  
* 1.使用props 逐层就行传递
* 2.使用context 进行传递
*/
// 创建Context对象
const myContext = React.createContext()
const { Provider, Consumer } = myContext

class Context extends Component {
    state = {
        userName: 'xiuming.wang',
        age: 18
    }
    render() {
        const {userName, age } = this.state
        return (
            <Fragment>
                <h1>Context 传参使用</h1>
                <h3>我是父组件</h3>
                <Provider value={{userName, age}}>
                    <Child/>
                </Provider>
            </Fragment>
        );
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                <h3>我是子组件</h3>
                <Son/>
            </div>
        );
    }
}

// 类式组件
// class Son extends Component {
//     static contextType = myContext
//     render() {
//         return (
//             <div>
//                 <h3>我是孙组件</h3>
//                 <div>我从父组件接受到的用户名为{this.context.userName} 年龄为{this.context.age}</div>
//             </div>
//         );
//     }
// }

// 函数式组件
function Son () {
    return (
        <div>
            <h3>我是孙组件</h3>
            <div>我从父组件接受到的用户名为
                <Consumer>
                    {
                        value => {
                            return `${value.userName} 年龄为${value.age}`
                        }
                    }
                </Consumer>
            </div>
        </div>
    );
}

export default Context;