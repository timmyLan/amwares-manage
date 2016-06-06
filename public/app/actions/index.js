import {CHANGE} from '../constants/actionTypes'


export function change(event, index, value) {
    return {
        type: CHANGE,
        value
    }
}