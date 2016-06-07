import {TITLE_CHANGE , TABLE_TYPE_CHANGE , TEACHER_TABLE_DATA_CHANGE, CHILDREN_TABLE_DATA_CHANGE , PERSON_TABLE_DATA_CHANGE}
    from '../constants/actionTypes'

export function titleChange(title) {
    return {
        type: TITLE_CHANGE,
        title
    }
}

export function tableTypeChange(title) {
    return {
        type: TABLE_TYPE_CHANGE,
        title
    }
}

export function teacherTableDataChange() {
    return {
        type: TEACHER_TABLE_DATA_CHANGE
    }
}

export function childrenTableDataChange() {
    return {
        type: CHILDREN_TABLE_DATA_CHANGE
    }
}

export function personTableDataChange() {
    return {
        type: PERSON_TABLE_DATA_CHANGE
    }
}