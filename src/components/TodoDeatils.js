import React, { Component } from "react"
import { Redirect } from "react-router"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'

export default class TodoDeatils extends Component {
  constructor() {
    super();
    this.todos = ";";
    this.click = true;
    this.navigate = false;
    this.state = {
      task: "",
      des: "",
      deadline: ""
    };
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.hadelChange = this.hadelChange.bind(this);
  }

  componentDidMount() {
    this.todos = JSON.parse(localStorage.getItem("todos"));
    for (let todo of this.todos) {
      if (String(todo.id) === this.props.match.params.deatil) {
        this.setState({
          task: todo.task,
          des: todo.des,
          deadline: todo.deadline
        });
      }
    }
  }

  delete() {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === this.props.match.params.deatil) {
        this.todos.splice(i, 1);
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
    this.navigate = true;
  }

  update() {
    for (let todo of this.todos) {
      if (todo.id === this.props.match.params.deatil) {
        todo = {
          id: todo.id,
          des: this.state.des,
          task: this.state.task,
          deadline: this.state.deadline
        };
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
    this.click = true;
  }

  hadelChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    if (this.navigate) {
      return <Redirect push to="/dashboard" />;
    } else {
      return (
        <div>
          {this.click ? (
            <div>
              <Card style={{ width: "18rem" }} className="mt-5">
                <Card.Body>
                  <Card.Title>task:</Card.Title>
                  <Card.Text>{this.state.task}</Card.Text>
                  <Card.Title>description:</Card.Title>
                  <Card.Text>{this.state.des}</Card.Text>
                  <Card.Title>deadline:</Card.Title>
                  <Card.Text>{this.state.deadline}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => (this.click = false)}
                    className="mr-2"
                  >
                    update
                  </Button>
                  <Button variant="primary" onClick={this.delete}>
                    delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <div>
              <input
                className="form-control mt-5 mb-2"
                type="text"
                value={this.state.des}
                placeholder="description"
                onChange={this.hadelChange}
                name="des"
              />
              <input
                className="form-control mb-2"
                type="text"
                value={this.state.task}
                placeholder="task"
                onChange={this.hadelChange}
                name="task"
              />
              <input
                className="form-control mb-2"
                type="text"
                value={this.state.deadline}
                placeholder="deadline"
                onChange={this.hadelChange}
                name="deadline"
              />
              <br />
              <button onClick={this.update} className="btn btn-light">confirm</button>
            </div>
          )}
        </div>
      );
    }
  }
}
