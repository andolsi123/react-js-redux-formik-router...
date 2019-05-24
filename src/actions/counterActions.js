import { COUNTER } from './types'

export const counterClick = () => dispatch => {
    dispatch({type: COUNTER})
}