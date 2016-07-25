/**
 * Created by llan on 2016/6/14.
 */
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class WarnningDialog extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClose(){
    this.props.actions.warningClose();
  }
  DeleteChild(){
    const data = {
      id: this.props.warningDialogState.row._id,
      page: this.props.tableInfo.page
    };
    if(this.props.tableInfo.searchData.searchParmas){
      data['searchParmas'] = this.props.tableInfo.searchData.searchParmas;
    }
    this.props.actions.deleteChild(data);
    this.handleClose();
  }
  render() {
    const actions = [
      <FlatButton
      label="Cancel"
      onTouchTap={()=>this.handleClose()}
      />,
      <FlatButton
      label="Delete"
      secondary={true}
      keyboardFocused={true}
      onTouchTap={()=>this.DeleteChild()}
      />
    ];
    return (
      <Dialog
      title="Delete"
      actions={actions}
      modal={false}
      open={this.props.warningDialogState.open}
      onRequestClose={()=>this.handleClose()}
      >
                Are you want to delete this?
            </Dialog>
    )
  }
}
