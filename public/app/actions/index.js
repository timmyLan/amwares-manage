import {TITLE_CHANGE , TABLE_DATA_CHANGE} from '../constants/actionTypes'

export function titleChange(title) {
    return {
        type: TITLE_CHANGE,
        title
    }
}

export function tableDataChange() {
    return {
        type: TABLE_DATA_CHANGE
    }
}