/**
 * Created by llan on 2016/6/7.
 */
import {TABLE_DATA_CHANGE} from '../constants/actionTypes'

const initialState = [
    {
        name: 'John Smith',
        status: 'Employed',
        selected: true
    },
    {
        name: 'Randal White',
        status: 'Unemployed'
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
        selected: true
    },
    {
        name: 'Steve Brown',
        status: 'Employed'
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed'
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed'
    },
    {
        name: 'Adam Moore',
        status: 'Employed'
    }
];

export default function tableData(state = initialState,action) {
    switch(action.type) {
        case TABLE_DATA_CHANGE:
            return [
                {
                    name: 'Adam Moore',
                    status: 'Employed'
                }
            ];
        default:
            return state;
    }
}