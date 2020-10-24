import axios from 'axios'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        payload: data
    }
}