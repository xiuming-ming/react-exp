/*
    该文件用于汇总所有的reducer为一个总的reducer
*/

// combineReducers 为合并 reducers
import { combineReducers } from 'redux'
// 引入专门为Count组件服务的reducer
import countReducer from './count.js'
// 引入专门为Person组件服务的reducer
import personReducer from './person.js'

export default combineReducers({
    he: countReducer,
    rens: personReducer
})
