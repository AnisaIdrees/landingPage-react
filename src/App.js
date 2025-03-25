import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class LandingPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav>
        <h1>Coders World </h1>
        <div class ="link-section">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default LandingPage;
