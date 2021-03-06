/**
 * Created by llan on 2016/6/14.
 */
/*components*/
import ChildrenTable from '../components/children/childrenTable'
/*redux*/
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemsActions from '../actions/children'

const styles = {
  container: {
    textAlign: 'center'
  }
};

class Children extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.container}>
          <ChildrenTable {...this.props}/>
      </div>
      );
  }
}

export default connect((state) => ({
  infoDialogState: state.children.infoDialogState,
  warningDialogState: state.children.warningDialogState,
  searchDialogState:state.children.searchDialogState,
  tableInfo: state.children.tableInfo
}), dispatch => ({
  actions: bindActionCreators(ItemsActions, dispatch)
}))(Children)
