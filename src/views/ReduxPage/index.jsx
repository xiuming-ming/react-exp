import React, { Component } from 'react';
import Count from '../Count'
import Person from '../../components/Person'

class index extends Component {
    render() {
        return (
            <div>
                <Count/>
                <div style={{marginTop: 30+ 'px'}}>
                <Person/>
                </div>
            </div>
        );
    }
}

export default index;