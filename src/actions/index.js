import axios from 'axios'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData(data) {
    return {
        type: RECEIVE_DATA,
        payload: data
    }
}

export const getOffers = () => (dispatch) => 
    axios
        .get(`https://5f2c373bffc88500167b8cce.mockapi.io/carrinho`)
        .then((response) => {
            dispatch(receiveData(response.data))
            return response.data
        })