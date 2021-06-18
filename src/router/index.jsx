import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

const Home = lazy(() => import('../views/Home'));
const PropPage = lazy(() => import('../views/PropPage'));
const State = lazy(() => import('../views/State'));
const ReduxPage = lazy(() => import('../views/ReduxPage'));
const Context = lazy(() => import('../views/Context'));
const Pubsub = lazy(() => import('../views/Pubsub'));
const SetState = lazy(() => import('../views/SetState'));
const PureComponent = lazy(() => import('../views/PureComponent'));

export default class RouteMap extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<h1>正在加载中，请稍后</h1>}>
                    <Switch>
                        <Route path="/propPage" component={PropPage} />
                        <Route path="/home" component={Home} />
                        <Route path="/state" component={State} />
                        <Route path="/reduxPage" component={ReduxPage} />
                        <Route path="/context" component={Context} />
                        <Route path="/pubsub" component={Pubsub} />
                        <Route path="/setstate" component={SetState} />
                        <Route path="/pureComponent" component={PureComponent} />
                        <Redirect to="/home"/>
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}
