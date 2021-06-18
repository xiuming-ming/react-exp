import React, { Component, Fragment } from 'react';
import Type from '../../components/propType' 

class Proppage extends Component {
    speak = ()=> {
        console.log(1111)
    }
    render() {
        return (
            <Fragment>
                <h2>props type 验证</h2>
                <Type age={19} name={'tom'} speak={this.speak}/>
            </Fragment>
        );
    }
}

export default Proppage;