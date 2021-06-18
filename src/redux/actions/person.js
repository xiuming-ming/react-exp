
import { ADD_PERSON } from '../constant'
// 该违建专门为count组件生成action对象
export const createAddPersonAction = (data) => {
    return {type: ADD_PERSON, data}
}

