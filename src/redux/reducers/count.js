/*
    该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
    reducer函数会接受到两个函数，分别为：之前的状态preState, 动作对象action
*/
import { INCREMENT, DECREMENT} from './constant'
const initState = 0
export default function countReducer (preState=initState, action) {
    // 从action对象中获取 type data
    const {type, data} = action
    // 根据type决定如何加工数据
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}
