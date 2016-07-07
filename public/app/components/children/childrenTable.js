/**
 * Created by llan on 2016/5/30.
 */
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ReactPaginate from 'react-paginate';
import InfoDialog from './infoDialog';
import WarningDialog from './warningDioaog';
import 'whatwg-fetch';
import querystring from 'querystring';
const styles = {
  tableColumn: {
    textAlign: 'center'
  }
};
export default class ChildrenTable extends React.Component {
  componentDidMount() {
    const params = querystring.stringify({
      page: 1
    });
    this.props.actions.getRows(params);
  }
  render() {
    const tableData = this.props.tableInfo.tableRows;
    const tableDataMap = tableData.map((row, index) => (
      <TableRow key={index}>
                <TableRowColumn style={styles.tableColumn}>{index + 1}</TableRowColumn>
                <TableRowColumn style={styles.tableColumn}>{row.name}</TableRowColumn>
                <TableRowColumn style={styles.tableColumn}>{row.age}</TableRowColumn>
                <TableRowColumn style={styles.tableColumn}>
                    <IconButton onTouchTap = {() => {
        this.props.actions.infoOpen(row);
        this.props.actions.changeTitle('Edit');
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
    const handlePageClick = (data) => {
      const params = querystring.stringify({
        page: data.selected + 1
      });
      this.props.actions.getRows(params);
    };
    return (
      <div>
                <AppBar
      title='Children'
      iconElementLeft={<span></span>}
      iconElementRight={
      <IconButton tooltip="Create" onTouchTap = {() => {
        this.props.actions.infoOpen();
        this.props.actions.changeTitle('Create');
      }}>
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
                            <TableHeaderColumn style={styles.tableColumn} tooltip="The Age">Age</TableHeaderColumn>
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
                {this.props.tableInfo.pages > 1 ? <ReactPaginate previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={<a href="">...</a>}
      pageNum={this.props.tableInfo.pages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      clickCallback={handlePageClick}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"} /> : ''}
                <InfoDialog {...this.props}/>
                <WarningDialog {...this.props}/>
            </div>

      );
  }
}
