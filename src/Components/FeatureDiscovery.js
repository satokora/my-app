
import React, {Component} from 'react';
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faNodeJs } from '@fortawesome/free-brands-svg-icons';

class FeatureDiscovery extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        
      }
     handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
    render()
    {
        return(
        
        <div className="fixed-action-btn">
            <a className="btn-floating btn-large teal darken-3 tooltipped" data-position="left" data-tooltip="This page is developed with...">
              <i className="large material-icons">build</i>
            </a>
            <ul>
              <li><a className="btn-floating blue tooltipped" data-position="left" data-tooltip="React" href="https://reactjs.org/" target="_blank"><FontAwesomeIcon icon={faReact}  size="lg" /></a></li>
              <li><a className="btn-floating green tooltipped" data-position="left" data-tooltip="Node.js" href="https://nodejs.org/en/" target="_blank"><FontAwesomeIcon icon={faNodeJs}  size="lg" /></a></li>
              <li><a className="btn-floating black tooltipped" data-position="left" data-tooltip="Github API" href="https://docs.github.com/en/rest" target="_blank"><FontAwesomeIcon icon={faGithub}  size="lg" /></a></li>
              <li><a className="btn-floating white tooltipped" data-position="left" data-tooltip="Materialize" href="https://materializecss.com/" target="_blank">
              <img src="https://materializecss.com/images/favicon/favicon-32x32.png" />
              
              </a></li>
            </ul>
        </div>
        )
    }
}

export default FeatureDiscovery;