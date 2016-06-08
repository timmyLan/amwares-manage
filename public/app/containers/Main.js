/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
'use strict';
import React from 'react';
/*material*/
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*components*/
import BaseTable from '../components/table';
import MyAppBar from '../components/appBar';
/*redux*/
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ItemsActions from '../actions'

const styles = {
    container: {
        textAlign: 'center'
    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

class Main extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <MyAppBar style={styles.app_bar} {...this.props}/>
                    <BaseTable {...this.props}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(state => ({
    appBarTitle: state.appBarTitle,
    tableData: state.tableData,
    tableType: state.tableType
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(Main)
