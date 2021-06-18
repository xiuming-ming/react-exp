import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id: nanoid(), name, age}
        this.props.add_person(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h1>我是person组件</h1>
                <h2>Count 组件的求和为{this.props.data.he}</h2>
                <input ref={c=> this.nameNode = c} type="text" placeholder="请输入名字" />
                <input ref={c=> this.ageNode = c} type="text" placeholder="请输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.data.rens.map((p) => {
                            return <li key={p.id}>{p.name}----{p.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(state => ({data: state}), {
    add_person: createAddPersonAction
})(Person)
