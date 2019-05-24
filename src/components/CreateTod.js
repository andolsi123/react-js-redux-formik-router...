import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CreateTod extends Component {
    constructor() {
        super()
        this.state = {
            task: "",
            des: "",
            deadline: ""
        }
        this.handelChange = this.handelChange.bind(this)
        this.handelSubmit = this.handelSubmit.bind(this)
    }

    handelChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handelSubmit() {
        const data = {
            id: Date.now(),
            task: this.state.task,
            des: this.state.des,
            deadline: this.state.deadline,
            idUser: localStorage.getItem("logged")
        }
        let tab = JSON.parse(localStorage.getItem("todos"))
        tab.push(data)
        localStorage.setItem("todos", JSON.stringify(tab))
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handelChange} name="task"/>
                <input type="text" onChange={this.handelChange} name="des"/>
                <input type="date" onChange={this.handelChange} name="deadline"/>
                <button onClick={this.handelSubmit}>add</button>
                <Link to="../dashboard">get back</Link>
            </div>
        )
    }
}
