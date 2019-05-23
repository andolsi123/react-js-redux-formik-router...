import {FETCH_WEATHER, FETCH_LOCATION} from './types'

export const fetchLoacation = () => dispatch => {
  fetch('http://api.ipapi.com/197.14.157.140?access_key=b6e7a2d65110e9de73b56dc2ac44dd18')
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_LOCATION,
    payload: data
}))
}

export const fetchWeather = (location) => dispatch => {
  fetch(`http://api.apixu.com/v1/current.json?key=30c8a879f4d843aebc1141754191805&q=${location}`)
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_WEATHER,
      payload: data
  })) 
}
