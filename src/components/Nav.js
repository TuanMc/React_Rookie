import React, { Component, useState } from 'react';
import './Nav.css';
export default function Nav () {
  const [username, setUsername]= useState('Hieu');
    return (
      <div >
        <nav id='navbar'>
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Contact</li></a>
            <a href="#"><li>About</li></a>
          </ul>

          <div className="nav-details">
            <p className="nav-username"> {username} </p>
          </div>
        </nav>
      </div>
    );}

