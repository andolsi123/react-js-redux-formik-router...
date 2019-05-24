import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class TodoDeatils extends Component {
    constructor() {
        super()
        this.todos = ";"
        this.click = true;
        this.navigate = false;
        this.state = {
           task: "",
           des: "",
           deadline: ""
        }
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
        this.hadelChange = this.hadelChange.bind(this)
    }
    
    componentDidMount() {
        this.todos = JSON.parse(localStorage.getItem('todos'))
        for (let todo of this.todos) {
            if(String(todo.id) === this.props.match.params.deatil) {
                this.setState({
                    task: todo.task,
                    des: todo.des,
                    deadline: todo.deadline
                })
            }
       }
    }

    delete() {
        for(let i = 0; i< this.todos.length; i++) {
            if(this.todos[i].id === this.props.match.params.deatil) {
              this.todos.splice(i, 1)
              localStorage.setItem("todos", JSON.stringify(this.todos))
            }
        }
        this.navigate = true
    }

    update() {
      for(let todo of this.todos) {
          if(todo.id === this.props.match.params.deatil) {
            todo = {
                id: todo.id,
                des: this.state.des,
                task: this.state.task,
                deadline: this.state.deadline
            }
            localStorage.setItem("todos", JSON.stringify(this.todos))
          }
      }
      this.click = true
    }

    hadelChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    render() {
        if(this.navigate) {
            return ( <Redirect push to="/dashboard" /> )
        } else {
            return (
                <div>
                {this.click ? 
                    <div>
                    <h3>task:</h3>{this.state.task}
                    <h3>description:</h3>{this.state.des}
                    <h3>deadline:</h3>{this.state.deadline}<br />
                    <button onClick={() => this.click = false} >update</button>
                    <button onClick={this.delete} >delete</button>
                    </div> : 
    
                    <div>
                    <input type="text" value={this.state.des} placeholder="description" onChange={this.hadelChange} name="des"/>
                    <input type="text" value={this.state.task} placeholder="task" onChange={this.hadelChange} name="task" />
                    <input type="text" value={this.state.deadline} placeholder="deadline" onChange={this.hadelChange} name="deadline" /><br />
                    <button onClick={this.update}>confirm</button>
                    </div>
                }
                </div>
            )
        }
        
    }
}
