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
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';

const styles = {
    iconStyles: {
        margin: '12px 14px',
        color:'rgb(250, 250, 250)'
    },
    linkStyle: {
        textDecoration: 'none',
        display: 'block'
    }
};
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
                iconElementRight={this.props.appBarTitle.title ? <FontIcon className="material-icons" style={styles.iconStyles}>
                    <Link
                        style={styles.linkStyle} to="/create" target="_brank">add_circle_outline
                    </Link>
                </FontIcon> : <span></span>}
            />
        )
    }
}