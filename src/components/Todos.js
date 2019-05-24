import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

export default class Todos extends Component {
  render() {
      const tabel = JSON.parse(localStorage.getItem("todos")).map(todo =>  {
        return todo.idUser === localStorage.getItem("logged") ?
          <tr key={todo.id}>
          <td>{todo.task}</td>
          <td>{todo.task}</td>
          <td>{todo.des}</td>
          <td>
            <Link to={`${this.props.match.url}/detail/${todo.id}`}>deatils</Link>
           </td>
         </tr>
        : <h1>you dont have any todos</h1> 
      })
    return (
      <div>
      <Table responsive="sm">
      <thead>
        <tr>
        <th>task</th>
        <th>description</th>
        <th>dead line</th>
        <th>action</th>
        </tr>
        </thead>
        <tbody>{tabel}</tbody>
      </Table>
      </div>
    )
  }
}
