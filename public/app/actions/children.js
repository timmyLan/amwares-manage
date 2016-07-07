/**
 * Created by llan on 2016/6/14.
 */
import 'whatwg-fetch';
import { INFO_OPEN, INFO_CLOSE, INFO_TITLE, WARNING_CLOSE, WARNING_OPEN, INITIAL_INFO, TABLE_ROWS_LIST, CREATE_CHILD, DELETE_CHILD, UPDATE_CHILD } from '../actionType/index'
export function infoOpen(row) {
  return {
    type: INFO_OPEN,
    row
  }
}
export function infoClose() {
  return {
    type: INFO_CLOSE
  }
}
export function changeTitle(title) {
  return {
    type: INFO_TITLE,
    title
  }
}

export function warningClose() {
  return {
    type: WARNING_CLOSE
  }
}

export function warningOpen(row) {
  return {
    type: WARNING_OPEN,
    row
  }
}

export function initialInfo() {
  return {
    type: INITIAL_INFO
  }
}
export function getRows(parmas) {
  return dispatch => {
    fetch('/children/list?' + parmas)
      .then(response => response.json())
      .then(json => {
        console.log('TABLE_ROWS_LIST', TABLE_ROWS_LIST);
        dispatch({
          type: TABLE_ROWS_LIST,
          json
        })
      }
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
