import { COUNTER } from '../actions/types'

const initialState = {
    count: 0
}

export default function(state = initialState, action) {
    switch (action.type) {
        case COUNTER:
            return Object.assign({}, state, {count: state.count + 1})
        default:
            return state
    }
}