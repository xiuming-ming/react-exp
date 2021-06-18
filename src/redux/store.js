/*
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入createStore 专门用于创建redux 中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'
// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

// 引入汇总的reducers
import allReducers from './reducers'

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
