import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Type extends Component {
    render() {
        const {name, age, sex} = this.props
        return (
            <div>
                我是验证props 类型及默认值

                <ul>
                    <li>姓名：{name}----年龄{age}----- 性别{sex}</li>
                </ul>
            </div>
        )
    }
}

Type.propTypes = {
    age: PropTypes.number,
    sex: PropTypes.string,
    name: PropTypes.string.isRequired,
    speak:PropTypes.func
}
Type.defaultProps = {
    sex: '男'
}
