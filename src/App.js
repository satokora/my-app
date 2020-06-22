import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
    <div class="off-canvas off-canvas-sidebar-show">
      <SideBar></SideBar>
      <div class="off-canvas-content">
        <div class="docs-content">
          <div class="container">
            <h1>H1 Heading</h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
