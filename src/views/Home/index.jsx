import React, { Component } from 'react';

export default class Menu extends Component {
    
    state = {
        list: [
            {name: 'Prop校验使用', path: '/propPage'},
            {name: '传参使用总结', path: '/state'},
            {name: 'Redux使用', path: '/reduxPage'},
            {name: 'Context使用', path: '/context'},
            {name: 'Pubsub使用', path: '/pubsub'},
            {name: 'SetState使用', path: '/setstate'},
            {name: 'PureComponent使用', path: '/pureComponent'},
            {name: 'RenderProps使用', path: '/renderProps'},
            {name: '渲染Html', path: '/renderHtml'},
            {name: 'Prompt阻止跳转', path: '/prompt'},
            {name: 'React 计算/监听', path: '/watch'},
            {name: 'Hooks useState使用', path: '/hooksUseState'},
            {name: 'Hooks useEffect使用', path: '/hooksUseEffect'},
            {name: 'Hooks useLayoutEffect使用', path: '/hooksUseLayoutEffect'},
            {name: 'Hooks useContext使用', path: '/hooksUseContext'},
            {name: 'Hooks useReducer使用', path: '/hooksUseReducer'},
            {name: 'Hooks useReducer组件分离使用', path: '/hooksUseReducer2'},
            {name: 'Hooks useMemo组件渲染优化', path: '/hooksUseMemo'},
            {name: 'Hooks useCallBack 使用', path: '/hooksUseCallBack'},
            {name: 'Hooks useCallBack2 使用', path: '/hooksUseCallBack2'},
            {name: 'Hooks useRef 使用', path: '/hooksUseRef'},
            {name: 'Hooks useRef2 使用', path: '/hooksUseRef2'},
            {name: 'Hooks forwardRef 使用', path: '/forwardRef'}
        ]
    }
    gotoPath =(list) => {
        debugger
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
