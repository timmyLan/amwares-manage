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
import FlatButton from 'material-ui/FlatButton';

export default class AppBarExampleIconMenu extends React.Component {
    handleClick(e) {
        let title = e.target.innerHTML;
        if(title == 'Person'){
            this.props.actions.personTableDataChange();
        }else if(title == 'Children'){
            this.props.actions.childrenTableDataChange();
        }else{
            this.props.actions.teacherTableDataChange();
        }
        this.props.actions.titleChange(title);
        this.props.actions.tableTypeChange(title);
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
                      <MenuItem primaryText="Person" onClick={(e) => this.handleClick(e)}/>
                      <MenuItem primaryText="Children" onClick={(e) => this.handleClick(e)}/>
                      <MenuItem primaryText="Teacher" onClick={(e) => this.handleClick(e)}/>
                 </IconMenu>
                }
                iconElementRight={this.props.appBarTitle.title ? <FlatButton label="添加" /> : <span></span>}
            />
        )
    }
}