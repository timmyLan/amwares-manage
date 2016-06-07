/**
 * Created by llan on 2016/5/30.
 */
import React from 'react';
import {Table, TableBody, TableHeader} from 'material-ui/Table';
import {TableHeaderColumn1 ,tableDataMap} from './tables/table1';

export default class BaseTable extends React.Component {
    render() {
        const tableData = this.props.tableData;
        
        return (
            <div>
                <Table
                    height='600px'
                    fixedHeader={true}
                    selectable={false}
                >
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                       <TableHeaderColumn1/>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                        deselectOnClickaway={true}
                        showRowHover={true}
                        stripedRows={true}
                    >
                        {tableDataMap(tableData)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}