/**
 * Created by llan on 2016/6/14.
 */
import {INFO_CLOSE,INFO_OPEN,WARNING_CLOSE,WARNING_OPEN,INFO_TITLE,
    TABLE_ROWS_LIST,CREATE_CHILD,DELETE_CHILD,UPDATE_CHILD}
    from '../constants/actionTypes'
import 'whatwg-fetch';
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

export function changeTitle(title){
    return {
        type: INFO_TITLE,
        title
    }
}

export function getRows(parmas) {
    return dispatch => {
       fetch('/children/list?'+parmas)
            .then(response => response.json())
            .then(json =>
                dispatch({type: TABLE_ROWS_LIST,json})
            )
    }
}

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