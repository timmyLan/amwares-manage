/**
 * Created by llan on 2016/6/14.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class DialogWarnning extends React.Component {
    render(){
        let handleClose = () => this.props.actions.warningClose();
        const actions = [
            <FlatButton
                label="Cancel"
                onTouchTap={handleClose}
            />,
            <FlatButton
                label="Delete"
                secondary={true}
                keyboardFocused={true}
                onTouchTap={handleClose}
            />
        ];
        return(
            <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={false}
                open={this.props.dialogWarningState.open}
                onRequestClose={handleClose}
            >
                Are you want to delete this?
            </Dialog>
        )
    }
}