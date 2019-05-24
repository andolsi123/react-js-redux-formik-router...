import { COUNTER } from './types'

export const counterClick = (payload) => dispatch => {
    dispatch({
        type: COUNTER,
        payload: payload
    })
}