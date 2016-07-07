/**
 * Created by llan on 2016/6/8.
 */
/*react-route*/
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Home from './Home';
import Children from './Children';

const route = (
<Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="children" component={Children} />
        </Route>
    </Router>
);
export default route;
