import {INFO_CLOSE,INFO_OPEN,WARNING_CLOSE,WARNING_OPEN}
    from '../constants/actionTypes'
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