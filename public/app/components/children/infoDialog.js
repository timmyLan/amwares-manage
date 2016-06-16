/**
 * Created by llan on 2016/6/13.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {FormsyText} from 'formsy-material-ui/lib';
const customContentStyle = {
    width: '75%',
    maxWidth: 'none'
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
                data = {...data,id:this.props.infoDialogState.row._id};
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
        const actions = [
            <FlatButton
                label="Cancel"
                onTouchTap={handleClose}
            />,
            <FlatButton
                onTouchTap={createChild}
                label="Submit"
                primary={true}/>
        ];
        return (
            <div>
                <Dialog
                    title={this.props.infoDialogState.title}
                    actions={actions}
                    modal={true}
                    contentStyle={customContentStyle}
                    open={this.props.infoDialogState.open}
                >
                    <Formsy.Form
                        id="childrenInfoForm"
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
                            required
                            hintText="How old are you?"
                            floatingLabelText="age"
                            fullWidth={true}
                            defaultValue={this.props.infoDialogState.row ? this.props.infoDialogState.row.age : ''}
                        /><br/>
                    </Formsy.Form>
                </Dialog>
            </div>
        );
    }
}