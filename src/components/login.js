import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { Redirect } from 'react-router'

class Login extends Component {
   constructor(props) {
    super(props);  
    this.state = {
      validate: false,
      click: false,
      email: '',
      password: ''
    }
    this.handelSubmit = this.handelSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
   }

   users = []
    
   handelSubmit() {
     if (this.state.email !== '' && this.state.password !== '') {
      this.users = JSON.parse(localStorage.getItem('users'))
      for (let user of this.users) {
       if (user.email === this.state.email && user.password === this.state.password) {
         localStorage.setItem('logged', this.state.email)
         this.setState({
           validate: true
         })
       }
     }
     } else {
       alert('complete all the inputs')
       this.setState({
        click: true
      })
     }    
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
    
  render() {
    if(this.state.validate) {
      return <Redirect push to="/dashboard" />
    } else {
    return (
     <div>
     <Header />
        <div className="container mt-5">
          <div className="row justify-content-md-center">
            <div className="col-md-4">
              <div className="form-signin">
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <label className="sr-only">Email address</label>
              <input type="email" className="form-control" placeholder="Email address" name="email" onChange={this.handleChange} />
              <label className="sr-only">Password</label>
              <input type="password" className="form-control mt-3" placeholder="Password" name="password" onChange={this.handleChange} />
                <button className={this.state.click ? "btn btn-danger mt-3 mr-3" : "btn btn-dark mt-3 mr-3"} onClick={this.handelSubmit}>Sign in</button>
                <Link to='/signup' className="btn btn-dark mt-3">Sign up</Link>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
             </div>
          </div>
        </div>
      </div>
     </div>
    )}
  }
}

export default Login
