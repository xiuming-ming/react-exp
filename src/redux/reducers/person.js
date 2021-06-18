/*
    该文件是用于创建一个为personReducer组件服务的reducer，reducer的本质就是一个函数
    reducer函数会接受到两个函数，分别为：之前的状态preState, 动作对象action
*/
import { ADD_PERSON} from '../constant'
const initState = [{id:'001', name: 'tom', age:18}]
export default function personReducer (preState=initState, action) {
    // 从action对象中获取 type data
    const {type, data} = action
    // 根据type决定如何加工数据
    switch (type) {
        case ADD_PERSON:
            // 这个地方要注意一下 redux 底层会做判断 返回的数据和preState 如果地址值一样  则页面不会做更新操作
            return [data, ...preState]
        default:
            return preState
    }
}
