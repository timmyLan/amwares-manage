/**
 * Created by llan on 2016/5/30.
 */
import React from 'react';
import {TableHeaderColumn, TableRow,TableRowColumn}
    from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
export class PersonTableHeaderColumn extends React.Component {
    render() {
        return (
            <TableRow>
                <TableHeaderColumn tooltip="The ID">#</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Operate">Operate</TableHeaderColumn>
            </TableRow>
        );
    }
}

export const PersonTableDataMap = tableData =>(
    tableData.map((row, index) => (
            <TableRow key={index}>
                <TableRowColumn >{index}</TableRowColumn>
                <TableRowColumn >{row.name}</TableRowColumn>
                <TableRowColumn >{row.status}</TableRowColumn>
                <TableRowColumn >
                    <FlatButton label="编辑"/>
                    <FlatButton label="删除" secondary={true}/>
                </TableRowColumn>
            </TableRow>
    )
));