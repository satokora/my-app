import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from "./SideBar";
import Content from "./Content";
import Iframe from "./Iframe";
import { render } from '@testing-library/react';

//const API="https://api.github.com/users";
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: 'satokora',
      src: 'https://www.linkedin.com/in/satokokora/'
  };
  }
  fetchLinkedinProfile(username) { 
    // // Import the module in your file
    // var ScrapeLinkedin = require("scrape-linkedin");
    
    // // Create the scraper object
    // var scrapper = new ScrapeLinkedin(
    //   {
    //     debug: true
    //   }
    // );
    
    // // Fetch a profile
    // scrapper.fetch(username)
    // .then((res) => res.json() )
    // // Handle the result
    // .then(profile => console.log(profile))
    // // Handle an error
    // .catch(err => console.log(err));
  }
  async componentDidMount() {
    this.fetchLinkedinProfile(this.state.username);
    
  }
render(){
  return (
    <div className="App">
    <div class="off-canvas off-canvas-sidebar-show">
      <SideBar></SideBar>
      <div class="off-canvas-content">
        <div class="docs-content">
          <div class="container">
            <Content></Content>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
}

export default App;
