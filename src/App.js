import React from 'react'
import './App.css'
import Signup from './components/signup'
import Dashboard from './components/dashboard'
import Login from './components/login'
import NotFound from './components/NotFound'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
     <BrowserRouter>
       <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
  )
}

export default App
