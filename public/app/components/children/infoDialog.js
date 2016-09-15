/**
 * Created by llan on 2016/6/13.
 */
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyText } from 'formsy-material-ui/lib';
const errorMessages = {
  wordsError: "Please only use letters",
  numericError: "Please provide a number"
};
const {wordsError, numericError} = errorMessages;
export default class InfoDialog extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClose(){
    this.props.actions.infoClose()
  }
  createChild(){
    const formData = new FormData(document.getElementById('childrenInfoForm'));
    let data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    if(this.props.tableInfo.searchData.searchParmas){
      data['searchParmas'] = this.props.tableInfo.searchData.searchParmas;
    }
    if (this.props.infoDialogState.title == 'Edit') {
      data = {
        ...data,
        id: this.props.infoDialogState.row._id,
        page: this.props.tableInfo.page
      };
      this.props.actions.updateChild(data);
    } else if (this.props.infoDialogState.title == 'Create') {
      this.props.actions.createChild(data);
    }
    this.handleClose();
  }
  render() {
    return (
      <div>
        <Dialog
          title={this.props.infoDialogState.title}
          modal={true}
          contentStyle={styles.customContentStyle}
          open={this.props.infoDialogState.open}
        >
        <Formsy.Form
          id="childrenInfoForm"
          onValidSubmit={()=>this.createChild()}
        >
          <FormsyText
            name="name"
            validations="isWords"
            validationError={wordsError}
            required
            hintText="What is your name?"
            floatingLabelText="Name"
            fullWidth={true}
            defaultValue={this.props.infoDialogState.row ? this.props.infoDialogState.row.name : ''}
          />
          <br/>
          <FormsyText
            name="age"
            validations="isNumeric"
            validationError={numericError}
            required
            hintText="How old are you?"
            floatingLabelText="age"
            fullWidth={true}
            defaultValue={this.props.infoDialogState.row ? this.props.infoDialogState.row.age : ''}
          />
          <br/>
          <RaisedButton
            label="Submit"
            type="submit"
            style={styles.btnStyle}
            primary={true}/>
            <RaisedButton
            label="Cancel"
            onTouchTap={()=>this.handleClose()}
            style={styles.btnStyle}
          />
        </Formsy.Form>
      </Dialog>
    </div>
    );
  }
}
const styles = {
  customContentStyle: {
    width: '75%',
    maxWidth: 'none'
  },
  btnStyle: {
    marginRight: '1em',
    float: 'right',
    marginTop: '1em'
  }
};
