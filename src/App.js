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
        <h1 class="logo">Coders <span>World</span></h1>
        <div class="link-section">
          <ul>
            <li type="active">Home</li>
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

export class HeroSection extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

      <div class="hero-section">

        <div class="wrapper">

          <div class="text-box">
            <h1>Welcome to Coders  <span>World</span></h1>
            <p>Empowering developers with the latest tech trends, tutorials, <br/>and coding challenges. Join us and enhance your coding skills today!</p>
            <button>Learn More</button>
          </div>

          <div class="image-box">
            <img src="https://landing-page-template-five.vercel.app/static/media/home.671d560d.svg"></img>
          </div>

        </div>

      </div>
    )
  }
}

