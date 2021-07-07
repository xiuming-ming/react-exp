import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import { list } from './path'
export default class RouteMap extends Component {

    state = {
        list:list
    }
    render() {
        return (
            <Router>
                <Suspense fallback={<h1>正在加载中，请稍后</h1>}>
                    <Switch>
                        {
                            this.state.list.map((item, index) => {
                                return <Route key={index} path={item.path} component={item.component} />
                            })
                        }
                        <Redirect to="/home"/>
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}
