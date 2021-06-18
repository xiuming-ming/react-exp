/*
* 使用 react-redux
* 引入UI 组件
* 引入 redux 中的 store
* 引入 connect 用于链接容器组件和 redux 进行通信
*/ 
import Count from '../../components/Count'
import { connect } from 'react-redux'
import { creatIncrementAction, creatDecrementAction, creatIncrementAsyncAction} from '../../redux/actions/count'

/*
* connect 并暴露 容器组件
* connect 传递两个函数
 */
// mapStateToProps 函数的返回值作为状态传递给了ui组件 返回的是一个对象  传递的是状态 a函数接受一个参数就是  state
function mapStateToProps (state) {
    return {count: state}
}

// 函数 传递的是 操作状态的方法  mapDispatchToProps方法接受一个参数就是  dispatch
function mapDispatchToProps (dispatch) {
    return {
        add:(data) => { dispatch(creatIncrementAction(data))},
        jian:(data) => {dispatch(creatDecrementAction(data))},
        addAsync:(data, time) => {dispatch(creatIncrementAsyncAction(data, time))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
