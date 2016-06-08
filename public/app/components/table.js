/**
 * Created by llan on 2016/5/30.
 */
import React from 'react';
import {Table, TableBody, TableHeader} from 'material-ui/Table';
import {PersonTableHeaderColumn, PersonTableDataMap} from './tables/personTable';
import {ChildrenTableHeaderColumn, ChildrenTableDataMap} from './tables/childrenTable';
import {TeacherTableHeaderColumn, TeacherTableDataMap} from './tables/teacherTable';

const styles = {
    main_background: {
        padding: '72px 24px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        backgroundColor: 'rgb(0, 188, 212)',
        width: 'auto'
    },
    main_text: {
        margin: '30px auto',
        color: 'rgba(255, 255, 255, 0.870588)',
        fontWeight: '300',
        fontSize: '56px'
    }
};
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
                    <div style={styles.main_background}>
                        <div>
                            <img src="./favicon.ico"/>
                            <h1 style={styles.main_text}>Amwares-Manage</h1>
                        </div>
                    </div>
                }
            </div>
        );
    }
}