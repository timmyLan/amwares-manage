/**
 * Created by llan on 2016/6/14.
 */
import 'whatwg-fetch';
export const INFO_OPEN = 'INFO_OPEN';
export function infoOpen(row) {
    return {
        type: INFO_OPEN,
        row
    }
}
export const INFO_CLOSE = 'INFO_CLOSE';
export function infoClose() {
    return {
        type: INFO_CLOSE
    }
}
export const INFO_TITLE = 'INFO_TITLE';
export function changeTitle(title){
    return {
        type: INFO_TITLE,
        title
    }
}

export const WARNING_CLOSE = 'WARNING_CLOSE';
export function warningClose() {
    return {
        type: WARNING_CLOSE
    }
}

export const WARNING_OPEN = 'WARNING_OPEN';
export function warningOpen(row) {
    return {
        type: WARNING_OPEN,
        row
    }
}

export const INITIAL_INFO = 'INITIAL_INFO';
export function initialInfo(){
    return {
        type: INITIAL_INFO
    }
}

export const TABLE_ROWS_LIST = 'TABLE_ROWS_LIST';
export function getRows(parmas) {
    return dispatch => {
       fetch('/children/list?'+parmas)
            .then(response => response.json())
            .then(json =>
                dispatch({type:TABLE_ROWS_LIST,json})
            )
    }
}
export const CREATE_CHILD = 'CREATE_CHILD';
export function createChild(data) {
    return dispatch => {
        fetch('/children/create',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(json =>
                dispatch({type: CREATE_CHILD,json})
            )
    }
}

export const DELETE_CHILD = 'DELETE_CHILD';
export function deleteChild(data) {
    return dispatch => {
        fetch('/children/delete',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(json =>
                dispatch({type: DELETE_CHILD,json})
            )
    }
}

export const UPDATE_CHILD = 'UPDATE_CHILD';
export function updateChild(data) {
    return dispatch => {
        fetch('/children/update',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(json =>
                dispatch({type: UPDATE_CHILD,json})
            )
    }
}