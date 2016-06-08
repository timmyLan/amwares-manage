/**
 * Created by llan on 2016/6/8.
 */
'use strict';
import React from 'react';

/*redux*/
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ItemsActions from '../actions'


class Create extends React.Component {
    render() {
        return (
            <div>
                <h2 >I am Create</h2>
            </div>
        );
    }
}

export default connect(state => ({
    appBarTitle: state.appBarTitle,
    tableData: state.tableData,
    tableType: state.tableType
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(Create)
