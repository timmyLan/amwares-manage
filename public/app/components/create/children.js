/**
 * Created by llan on 2016/6/8.
 */
/*redux*/
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as ItemsActions from './app/actions'

class Create extends React.Component {
    render() {
        return (
            <h1>I am create</h1>
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