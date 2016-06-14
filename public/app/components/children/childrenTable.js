/**
 * Created by llan on 2016/5/30.
 */
import React from 'react';
import {Table, TableBody, TableHeader,TableHeaderColumn, TableRow,TableRowColumn} from 'material-ui/Table';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import InfoDialog from './dialog';
import WarningDialog from './warning';
const styles ={
    tableColumn :{
        textAlign:'center'
    }
};
const tableData = [
    {
        name: 'John Smith',
        age: '12'
    },
    {
        name: 'Randal White',
        age: '11'
    }
];
export default class ChildrenTable extends React.Component {
    render() {
        let tableDataMap = tableData.map((row, index) => (
            <TableRow key={index}>
                <TableRowColumn style={styles.tableColumn}>{index}</TableRowColumn>
                <TableRowColumn style={styles.tableColumn}>{row.name}</TableRowColumn>
                <TableRowColumn style={styles.tableColumn}>{row.age}</TableRowColumn>
                <TableRowColumn style={styles.tableColumn}>
                    <IconButton onTouchTap = {() => {
                            this.props.actions.infoOpen(row);
                        }}>
                        <FontIcon className="material-icons">
                            mode_edit
                        </FontIcon>
                    </IconButton>
                    <IconButton onTouchTap = {() => {
                            this.props.actions.warningOpen(row);
                        }}>
                        <FontIcon className="material-icons">
                            delete_forever
                        </FontIcon>
                    </IconButton>
                </TableRowColumn>
            </TableRow>
        ));
        return (
            <div>
                <AppBar
                    title='Children'
                    iconElementLeft={<span></span>}
                    iconElementRight={
                        <IconButton tooltip="Create">
                            <FontIcon className="material-icons">
                                add
                            </FontIcon>
                        </IconButton>
                    }
                />
                <Table
                    height='600px'
                    fixedHeader={true}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn style={styles.tableColumn} tooltip="The ID">#</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableColumn} tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableColumn} tooltip="The Children">Age</TableHeaderColumn>
                            <TableHeaderColumn style={styles.tableColumn} tooltip="The Operate">Operate</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        showRowHover={true}
                        displayRowCheckbox={false}
                        stripedRows={true}>
                        {tableDataMap}
                    </TableBody>
                </Table>
                <InfoDialog {...this.props}/>
                <WarningDialog {...this.props}/>
            </div>

        );
    }
}