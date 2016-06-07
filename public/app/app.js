"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './containers/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
injectTapEventPlugin();
const store = configureStore();
const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
            <Main />
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);