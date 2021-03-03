// const { Component } = require("react");

import React, {Component} from 'react';
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class FeatureDiscovery extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        
      }
     handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        //document.querySelector('.tap-target').tapTarget('open'); 
        //var instance = M.TapTarget.getInstance(e);
        //e.open();
        //$('.tap-target').tapTarget('open');
      }
    render()
    {
        return(
        
        <div class="fixed-action-btn">
            <a class="btn-floating btn-large teal darken-3 tooltipped" data-position="left" data-tooltip="This page is developed with...">
              <i class="large material-icons">build</i>
            </a>
            <ul>
              <li><a class="btn-floating blue tooltipped" data-position="left" data-tooltip="React" href="https://reactjs.org/" target="_blank"><FontAwesomeIcon icon={faReact}  size="lg" /></a></li>
              <li><a class="btn-floating green tooltipped" data-position="left" data-tooltip="Node.js" href="https://nodejs.org/en/" target="_blank"><FontAwesomeIcon icon={faNodeJs}  size="lg" /></a></li>
              <li><a class="btn-floating black tooltipped" data-position="left" data-tooltip="Github API" href="https://docs.github.com/en/rest" target="_blank"><FontAwesomeIcon icon={faGithub}  size="lg" /></a></li>
              <li><a class="btn-floating white tooltipped" data-position="left" data-tooltip="Materialize" href="https://materializecss.com/" target="_blank">
              <img src="https://materializecss.com/images/favicon/favicon-32x32.png" />
              {/* <i class="material-icons">attach_file</i> */}
              </a></li>
            </ul>
        </div>
        )
    }
}

export default FeatureDiscovery;