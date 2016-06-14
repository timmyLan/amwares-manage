/**
 * Created by llan on 2016/6/13.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
const customContentStyle = {
    width: '75%',
    maxWidth: 'none'
};

export default class InfoDialog extends React.Component {
    render() {
        let handleClose = () => this.props.actions.infoClose();
        const actions = [
            <FlatButton
                label="Cancel"
                onTouchTap={handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={handleClose}
            />
        ];
        return (
            <div>
                <Dialog
                    title="Edit"
                    actions={actions}
                    modal={true}
                    contentStyle={customContentStyle}
                    open={this.props.dialogInfoState.open}
                >
                <TextField
                    hintText="Name"
                    defaultValue={this.props.dialogInfoState.row.name}
                    fullWidth={true}
                /><br />
                <TextField
                    hintText="Age"
                    defaultValue={this.props.dialogInfoState.row.age}
                    fullWidth={true}
                />
                </Dialog>
            </div>
        );
    }
}