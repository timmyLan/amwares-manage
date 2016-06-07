/**
 * Created by llan on 2016/6/7.
 */
import {TABLE_TYPE_CHANGE , TEACHER_TABLE_DATA_CHANGE, CHILDREN_TABLE_DATA_CHANGE , PERSON_TABLE_DATA_CHANGE }
    from '../constants/actionTypes'

const initialState = [
    {
        name: 'John Smith',
        status: 'Employed'
    },
    {
        name: 'Randal White',
        status: 'Unemployed'
    }
];

const initialTableType = '';

export function tableData(state = initialState,action) {
    switch(action.type) {
        case CHILDREN_TABLE_DATA_CHANGE:
            return [
                {
                    name: 'Children',
                    status: 'Employed'
                }
            ];
        case TEACHER_TABLE_DATA_CHANGE:
            return [
                {
                    name: 'Teacher',
                    status: 'Employed'
                }
            ];
        case PERSON_TABLE_DATA_CHANGE:
            return [
                {
                    name: 'Person',
                    status: 'Employed'
                }
            ];
        default:
            return state;
    }
}

export function tableType(state = initialTableType,action) {
    switch(action.type) {
        case TABLE_TYPE_CHANGE:
            return action.title;
        default:
            return state;
    }
}