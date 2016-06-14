/**
 * Created by llan on 2016/6/14.
 */
'use strict';
import React from 'react';
/*components*/
import ChildrenTable from '../components/children/childrenTable'
/*redux*/
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ItemsActions from '../actions'

const styles = {
    container: {
        textAlign: 'center'
    }
};

class Children extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <ChildrenTable {...this.props}/>
            </div>
        );
    }
}

export default connect(state => ({
    dialogInfoState: state.dialogInfoState,
    dialogWarningState: state.dialogWarningState
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(Children)