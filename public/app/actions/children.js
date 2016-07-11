/**
 * Created by llan on 2016/6/14.
 */
import 'whatwg-fetch';
import {SEARCH_OPEN,SEARCH_CLOSE,SEARCH_CHILD,INFO_OPEN, INFO_CLOSE, INFO_TITLE, WARNING_CLOSE, WARNING_OPEN, INITIAL_INFO, TABLE_ROWS_LIST, CREATE_CHILD, DELETE_CHILD, UPDATE_CHILD } from '../actionType/children';
import { actionCreator } from 'redux-action-utils';
exports.infoOpen = actionCreator(INFO_OPEN, 'row');
exports.infoClose = actionCreator(INFO_CLOSE);
exports.searchOpen = actionCreator(SEARCH_OPEN);
exports.searchClose = actionCreator(SEARCH_CLOSE);
exports.changeTitle = actionCreator(INFO_TITLE, 'title');
exports.warningClose = actionCreator(WARNING_CLOSE);
exports.warningOpen = actionCreator(WARNING_OPEN, 'row');
exports.initialInfo = actionCreator(INITIAL_INFO);
export function getRows(parmas) {
  return dispatch => {
    fetch('/children/list?' + parmas)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: TABLE_ROWS_LIST,
          json
        })
      }
    )
  }
}
export function searchChild(data){
  return dispatch => {
    fetch('children/search',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(json => dispatch({
        type: SEARCH_CHILD,
        json,
        data
      })
    )
  }
}
export function createChild(data) {
  return dispatch => {
    fetch('/children/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(json => dispatch({
        type: CREATE_CHILD,
        json
      })
    )
  }
}

export function deleteChild(data) {
  return dispatch => {
    fetch('/children/delete', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(json => dispatch({
        type: DELETE_CHILD,
        json
      })
    )
  }
}

export function updateChild(data) {
  return dispatch => {
    fetch('/children/update', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(json => dispatch({
        type: UPDATE_CHILD,
        json
      })
    )
  }
}
