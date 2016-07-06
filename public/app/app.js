"use strict";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import route from './containers/route'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import '../css/main.scss';
injectTapEventPlugin();
const store = configureStore();
const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
            {route}
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);