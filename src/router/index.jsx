import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Home from '../views/Home'
import PropPage from '../views/PropPage'
import State from '../views/State'
import ReduxPage from '../views/ReduxPage'

export default class RouteMap extends Component {
    render() {
        return (
            <Router>
                <Route path="/propPage" component={PropPage} />
                <Route path="/home" component={Home} />
                <Route path="/state" component={State} />
                <Route path="/reduxPage" component={ReduxPage} />
                <Redirect to="/home"/>
            </Router>
        );
    }
}
