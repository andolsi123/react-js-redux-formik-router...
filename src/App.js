import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Signup from './components/signup'
import Dashboard from './components/dashboard'
import Login from './components/login'
import NotFound from './components/NotFound'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
     <BrowserRouter>
       <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
  )
}

export default App
