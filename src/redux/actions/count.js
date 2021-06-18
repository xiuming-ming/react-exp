
import { INCREMENT, DECREMENT} from '../constant'
// 该违建专门为count组件生成action对象
export const creatIncrementAction = (data) => {
    return {type: INCREMENT, data}
}

export const creatDecrementAction = (data) => {
    return {type: DECREMENT, data}
}

// 异步action，就是指action的值为函数  异步action中一般都会调用同步action  异步action不是必须要用的
export const creatIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(()=> {
            dispatch(creatIncrementAction(data))
        },time)
    }
}
