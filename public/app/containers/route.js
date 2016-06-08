/**
 * Created by llan on 2016/6/8.
 */
/*react*/
import React from 'react';

/*react-route*/
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './Main';
const route = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Main} />
        </Route>
    </Router>
);

export default route;
