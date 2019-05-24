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
                <input type="text" onChange={this.handelChange} className="form-control mb-2 mt-5" palceholder="task" name="task"/>
                <input type="text" onChange={this.handelChange} className="form-control mb-2" palceholder="description" name="des"/>
                <input type="date" onChange={this.handelChange} className="form-control mb-2" name="deadline"/>
                <button onClick={this.handelSubmit} className="btn btn-dark mr-2" >add</button>
                <Link to="../dashboard" className="btn btn-dark">get back</Link>
            </div>
        )
    }
}
