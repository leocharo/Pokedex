import React, { Component } from 'react';
import styles from './NavBar.module.css'
    

export default class NavBar extends Component {
  render(){
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-pink sticky-top'>
        <a className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center' href="/">
          Pokedex
        </a>
        <form className="form-inline my-2 my-lg-0 ml-auto">
          <input className="form-control mr-sm-2" type="search" placeholder="Search pokemon..." aria-label="Search" />
          <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
  }
}
