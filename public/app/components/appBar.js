/**
 * Created by llan on 2016/6/6.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {grey50} from 'material-ui/styles/colors';

export default class AppBarExampleIconMenu extends React.Component {
    handleClick(e) {
        let title = e.target.innerHTML;
        this.props.actions.titleChange(title);
        console.log('actions',this.props.actions)
        this.props.actions.tableDataChange();
    }
    render() {
        return (
            <AppBar
                title={<span>{this.props.appBarTitle.title}</span>}
                iconElementLeft={
                  <IconMenu
                      iconButtonElement={<IconButton><MenuIcon color={grey50}/></IconButton>}
                      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                      targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    >
                      <MenuItem primaryText="Refresh" onClick={(e) => this.handleClick(e)}/>
                      <MenuItem primaryText="Send feedback" onClick={(e) => this.handleClick(e)}/>
                      <MenuItem primaryText="Settings" onClick={(e) => this.handleClick(e)}/>
                      <MenuItem primaryText="Help" onClick={(e) => this.handleClick(e)}/>
                      <MenuItem primaryText="Sign out" onClick={(e) => this.handleClick(e)}/>
                 </IconMenu>
                }
            />
        )
    }
}