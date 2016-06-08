/**
 * Created by llan on 2016/5/30.
 */
import React from 'react';
import {Table, TableBody, TableHeader} from 'material-ui/Table';
import {PersonTableHeaderColumn, PersonTableDataMap} from './tables/personTable';
import {ChildrenTableHeaderColumn, ChildrenTableDataMap} from './tables/childrenTable';
import {TeacherTableHeaderColumn, TeacherTableDataMap} from './tables/teacherTable';

export default class BaseTable extends React.Component {
    render() {
        const tableData = this.props.tableData;
        let TableHeaderColumn;
        let tableDataMap;
        if (this.props.tableType == 'Person') {
            TableHeaderColumn = <PersonTableHeaderColumn/>;
            tableDataMap = PersonTableDataMap;
        } else if (this.props.tableType == 'Children') {
            TableHeaderColumn = <ChildrenTableHeaderColumn/>;
            tableDataMap = ChildrenTableDataMap;
        } else if (this.props.tableType == 'Teacher') {
            TableHeaderColumn = <TeacherTableHeaderColumn/>;
            tableDataMap = TeacherTableDataMap;
        }
        return (
            <div>
                {this.props.tableType ?
                    <Table
                        height='600px'
                        fixedHeader={true}
                        selectable={false}
                    >
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                        >
                            {TableHeaderColumn}
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}
                            deselectOnClickaway={true}
                            showRowHover={true}
                            stripedRows={true}
                        >
                            {tableDataMap(tableData)}
                        </TableBody>
                    </Table> :
                    <span></span>
                }
            </div>
        );
    }
}