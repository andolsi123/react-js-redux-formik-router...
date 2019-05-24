import React from 'react'
import { connect } from 'react-redux'
import { counterClick } from '../actions/counterActions'

function Counter(props) {
    return (
        <div>
            <h1 className="font-weight-bold mt-5">{props.counter.count}</h1>
            <button className="btn btn-secondary" onClick={props.onIncrement}>increment</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    console.log("mapdispatch")
    return {
        onIncrement: () => dispatch(counterClick())
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
