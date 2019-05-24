import {FETCH_WEATHER, FETCH_LOCATION} from '../actions/types'

const initialState = {
  loc: {},
  weth: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        ...state,
        loc: action.payload
      }
      case FETCH_WEATHER:
      return {
        ...state,
        weth: action.payload
      }
    default:
      return state
  }
}