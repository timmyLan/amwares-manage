/**
 * Created by llan on 2016/6/13.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {FormsyText} from 'formsy-material-ui/lib';
const styles = {
    customContentStyle : {
        width: '75%',
        maxWidth: 'none'
    },
    btnStyle : {
        marginRight : '1em',
        float : 'right',
        marginTop　: '1em'
    }
};

export default class InfoDialog extends React.Component {
    render() {
        let handleClose = () => this.props.actions.infoClose();
        let createChild = () => {
            let formData = new FormData(document.getElementById('childrenInfoForm'));
            let data = {};
            for (var [key, value] of formData.entries()) {
                data[key] = value;
            }
            if(this.props.infoDialogState.title == 'Edit'){
                data = {...data,id:this.props.infoDialogState.row._id,page:this.props.tableInfo.page};
                this.props.actions.updateChild(data);
            }else if(this.props.infoDialogState.title == 'Create'){
                this.props.actions.createChild(data);
            }
            handleClose();
        };
        const  errorMessages = {
            wordsError: "Please only use letters",
            numericError: "Please provide a number",
            urlError: "Please provide a valid URL"
        };
        let { wordsError, numericError, urlError } = errorMessages;
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
                        onValidSubmit={createChild}
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
                        /><br/>
                        <FormsyText
                            name="age"
                            validations="isNumeric"
                            validationError={numericError}
                            required
                            hintText="How old are you?"
                            floatingLabelText="age"
                            fullWidth={true}
                            defaultValue={this.props.infoDialogState.row ? this.props.infoDialogState.row.age : ''}
                        /><br/>
                        <RaisedButton
                            label="Submit"
                            type="submit"
                            style={styles.btnStyle}
                            primary={true}/>
                        <RaisedButton
                            label="Cancel"
                            onTouchTap={handleClose}
                            style={styles.btnStyle}
                        />
                    </Formsy.Form>
                </Dialog>
            </div>
        );
    }
}