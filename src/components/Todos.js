import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

export default class Todos extends Component {
  constructor() {
    super()
    this.edit = this.edit.bind(this)
    this.delete = this.delete.bind(this)
  }

  edit(id) {

  }

  delete(id) {

  }

  render() {
    const tbl = JSON.parse(localStorage.getItem("todos")).map(todo =>  
      <tr>
       <td>{todo.task}</td>
       <td>{todo.task}</td>
       <td>{todo.des}</td>
       <td>
         <button type="button" onClick={this.edit(todo.id)}>edit</button>
         <button type="button" onClick={this.delete(todo.id)}>delete</button>
        </td>
      </tr>)
    return (
      <div>
      <Table responsive="sm">
        <tr>
        <th>task</th>
        <th>description</th>
        <th>dead line</th>
        <th>action</th>
        </tr>
        {tbl}
      </Table>
      </div>
    )
  }
}
