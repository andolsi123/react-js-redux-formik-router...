import React from 'react'
import './Header.css'
import logo from '../logo.svg'

export default function Header() {
  return (
    <div>
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link" >
           HEADER
        </p>
       </header>
    </div>
  )
}
