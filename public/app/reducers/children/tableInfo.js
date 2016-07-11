/**
 * Created by llan on 2016/6/13.
 */
import { TABLE_ROWS_LIST, CREATE_CHILD, DELETE_CHILD, UPDATE_CHILD, INITIAL_INFO,SEARCH_CHILD } from '../../actionType/children';
const initialState = {
  tableRows: [],
  pages: 0,
  page: 0,
  searchData:{}
};

export default function tableInfo(state = initialState, action) {
  switch (action.type) {
    case INITIAL_INFO:
      return initialState;
    case TABLE_ROWS_LIST:
      return {
        ...state,
        tableRows: action.json.docs,
        pages: action.json.pages,
        page: Number(action.json.page)
      };
    case SEARCH_CHILD:
      return {
        ...state,
        tableRows: action.json.docs,
        pages: action.json.pages,
        page: Number(action.json.page),
        searchData:action.data
      };
    case CREATE_CHILD:
      return {
        ...state,
        tableRows: [action.json, ...state.tableRows]
      };
    case DELETE_CHILD:
      return {
        ...state,
        tableRows: action.json.docs,
        pages: action.json.pages,
        page: Number(action.json.page)
      };
    case UPDATE_CHILD:
      return {
        ...state,
        tableRows: action.json.docs,
        pages: action.json.pages,
        page: Number(action.json.page)
      };
    default:
      return state;
  }
}
