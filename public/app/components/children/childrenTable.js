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
import SearchDialog from './searchDialog';
import 'whatwg-fetch';
import querystring from 'querystring';
export default class ChildrenTable extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      tableColumn: {
        textAlign: 'center'
      }
    };
  }
  componentDidMount() {
    const params = querystring.stringify({
      page: 1
    });
    this.props.actions.getRows(params);
  }
  handleClearSearch(){
    const data = {
      searchParmas:{
        page:1
      }
    }
    this.props.actions.searchChild(data);
  }
  handlePageClick(data){
    if(this.props.tableInfo.searchData.searchParmas){
      const searchParmas = {...this.props.tableInfo.searchData.searchParmas,page:data.selected+1};
      this.props.actions.searchChild({searchParmas:searchParmas});
    }else{
      const params = querystring.stringify({
        page: data.selected + 1
      });
      this.props.actions.getRows(params);
    }
  }
  clearSearch(){
    const searchParmas = this.props.tableInfo.searchData.searchParmas;
    if(searchParmas){
      if(searchParmas.name || searchParmas.age){
        return (
          <IconButton tooltip="ClearSearch" onTouchTap = {() => this.handleClearSearch()}>
                <FontIcon className="material-icons" color="#fff">
                    clear
                </FontIcon>
          </IconButton>
        )
      }else{
        return null;
      }
    }
  }
  tableMap(){
    const tableData = this.props.tableInfo.tableRows;
    return tableData.map((row, index) =>(
        <TableRow key={index}>
            <TableRowColumn style={this.styles.tableColumn}>{index + 1}</TableRowColumn>
            <TableRowColumn style={this.styles.tableColumn}>{row.name}</TableRowColumn>
            <TableRowColumn style={this.styles.tableColumn}>{row.age}</TableRowColumn>
            <TableRowColumn style={this.styles.tableColumn}>
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
      )
    )
  }
  render() {
    return (
      <div>
        <AppBar
        title='Children'
        iconElementLeft={<span></span>}
        iconElementRight={
          <div>
            <IconButton tooltip="Create" onTouchTap = {() => {
              this.props.actions.infoOpen();
              this.props.actions.changeTitle('Create');
            }}>
                  <FontIcon className="material-icons" color="#fff">
                      add
                  </FontIcon>
            </IconButton>
            <IconButton tooltip="Search" onTouchTap = {() => {
              this.props.actions.searchOpen();
            }}>
                  <FontIcon className="material-icons" color="#fff">
                      search
                  </FontIcon>
            </IconButton>
            {
              this.clearSearch()
            }
          </div>}
        />
        <Table
        height='600px'
        fixedHeader={true}>
            <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}>
              <TableRow>
                  <TableHeaderColumn style={this.styles.tableColumn} tooltip="The ID">#</TableHeaderColumn>
                  <TableHeaderColumn style={this.styles.tableColumn} tooltip="The Name">Name</TableHeaderColumn>
                  <TableHeaderColumn style={this.styles.tableColumn} tooltip="The Age">Age</TableHeaderColumn>
                  <TableHeaderColumn style={this.styles.tableColumn} tooltip="The Operate">Operate</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
            showRowHover={true}
            displayRowCheckbox={false}
            stripedRows={true}>
                {this.tableMap()}
            </TableBody>
        </Table>
        {this.props.tableInfo.pages > 1 ? <ReactPaginate previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={<a href="">...</a>}
              pageNum={this.props.tableInfo.pages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              clickCallback={(data)=>this.handlePageClick(data)}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"} /> : ''}
          <InfoDialog {...this.props}/>
          <WarningDialog {...this.props}/>
          <SearchDialog {...this.props}/>
      </div>
      );
  }
}
