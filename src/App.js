import React, { Component } from 'react';
import './App.css';
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";
import FeatureDiscovery from "./Components/FeatureDiscovery";
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes} from './Util/Routes';

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
  }
  async componentDidMount() {
    this.fetchLinkedinProfile(this.state.username);
    
  }
render(){
  return (
    <div className="App">
    <Router>
        <div className="off-canvas off-canvas-sidebar-show">
            <SideBar></SideBar>
            <div className="off-canvas-content">
              <div className="docs-content">
                <div className="container">
                  <Content></Content>
                  <FeatureDiscovery></FeatureDiscovery>
                </div>
              </div>
          </div>
      </div>
    </Router>
    </div>
      
    
  );
}
}

export default App;
