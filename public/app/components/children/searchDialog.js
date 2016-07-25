import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyText } from 'formsy-material-ui/lib';
const errorMessages = {
  wordsError: "Please only use letters",
  numericError: "Please provide a number"
};
const {wordsError, numericError} = errorMessages;
export default class SearchDialog extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClose(){
    this.props.actions.searchClose();
  }
  searchChild(){
    const formData = new FormData(document.getElementById('childrenSearchForm'));
    let data = {};
    for (const [key, value] of formData.entries()) {
       data[key] = value;
    }
    data = {...data , page : 1};
    data = { searchParmas : data};
    this.props.actions.searchChild(data);
    this.handleClose();
  }
  render() {
    return (
      <div>
        <Dialog
        title="Search"
        modal={false}
        contentStyle={styles.customContentStyle}
        open={this.props.searchDialogState.open}
        >
          <Formsy.Form
          id="childrenSearchForm"
          onValidSubmit={()=>this.searchChild()}
          >
            <FormsyText
            name="name"
            validations="isWords"
            validationError={wordsError}
            hintText="Search for name"
            floatingLabelText="Name"
            fullWidth={true}
            /><br/>
            <FormsyText
            name="age"
            validations="isNumeric"
            validationError={numericError}
            hintText="Search for age"
            floatingLabelText="age"
            fullWidth={true}
            /><br/>
            <RaisedButton
            label="Search"
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
    )
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
