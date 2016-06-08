/**
 * Created by llan on 2016/6/8.
 */
/*react*/
import React from 'react';
/*react-route*/
import { Router, Route, IndexRoute , hashHistory } from 'react-router';

import App from './App';
import Home from './Home';
import Manage from './Manage';
import Create from './Create';


const route = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="manage" component={Manage} />
            <Route path="create" component={Create} />
        </Route>
    </Router>
);
export default route;
