import logo from './logo.svg';
import React, { Component, useState } from 'react';
import './App.css';
import Home from './components/Home.js'
import Nav from './components/Nav';


class App extends React.Component{
  constructor(props) {
    super(props);
    //Chỉ định một state
    this.state = { bootcamp: 'Rookies' };
  }
  render(){
    return (
      <div className="App">
        <Nav></Nav>
        <Home props={this.state.bootcamp}></Home> <!-- Shouldn't use 'props' as key name -->
      </div>
    );
  }
  
}

export default App;
