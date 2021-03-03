import React, {Component} from 'react';
import './SideBar.css';
//import avatar from './images/11066361.jpeg'; 
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link , BrowserRouter as Router } from 'react-router-dom';
import * as Constants from '../Util/Constants';

//const API="https://api.github.com/users";
class SideBar extends Component{
    
    constructor(props){
        super(props);
        this.state={
            bio:"",
           // username: 'satokora',
      name:'',
      avatar:'',
      location:'',
      repos:'',
      followers: '',
      following:'',
      homeUrl:'',
      notFound:'',
      activePage: 'language'
        };
    }
    fetchProfile() { 
        let url = `${Constants.API}/${Constants.USER_NAME}`;
        fetch(url)
          .then((res) => res.json() )
          .then((data) => {
            this.setState({
              username: data.login,
              name: data.name,
              avatar: data.avatar_url,
              location: data.location,
              repos: data.public_repos,
              followers: data.followers,
              following: data.following,
              homeUrl: data.html_url,
              notFound: data.message,
              bio:data.bio
            })
          })
          .catch((error) => console.log(JSON.stringify(error)) )
      }
      setActive(currPage) {
        this.setState(
            {
                activePage: currPage
            }
        )
      }
    async componentDidMount() {
        this.fetchProfile();
        
        
      }

    render(){
       
        return(
            <div>
            
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li>
                <hr/>
                    <div className="user-view amber lighten-5 center">
                    
                        <div className="background">
                        </div>
                        <a class="tooltipped" data-position="right" data-tooltip="Thank you for visiting my page!" href="#user"><img className="circle" src={this.state.avatar} /></a>
                        <h6>{this.state.name}<br/><span lass="lang-ja"><ruby>高<rt>こう</rt>良<rt>ら</rt>智<rt>さと</rt>子<rt>こ</rt></ruby></span></h6>
                        
                        <a target="_blank" href="https://linkedin.com/in/satoko-kora-223aa380"><FontAwesomeIcon icon={faLinkedin}  size="lg" /></a>&nbsp;
                        <a href="mailto:satokorambxl@gmail.com"><FontAwesomeIcon icon={faEnvelope}  size="lg" /></a>
                        
                    </div>
                    <hr/>
                    <div className="card">
                        <div className="card-content white-text">
                            <p>{this.state.bio}</p>
                        </div>
                    </div>
                </li>
                {/* <li><div className="divider"></div>
                </li> */}
                <ul class="collection with-header">
                <li  class="collection-header">
                <a  className="subheader white-text" href="#!">
                <b>My Github Repositories</b></a>
                </li>
             
                
                <li className={this.state.activePage=="language" ? 'collection-item active': 'collection-item'} >
                <Link className="waves-effect" onClick={()=>this.setActive("language")} to="/language">By Language</Link>
                </li>
                <li className={this.state.activePage=="topic" ? 'collection-item active': 'collection-item'}>
                <Link className="waves-effect" onClick={()=>this.setActive("topic")} to="/topic">By Topic</Link>
                </li>
                <li className={this.state.activePage=="timeline" ? 'collection-item active': 'collection-item'}>
                <Link className="waves-effect" onClick={()=>this.setActive("timeline")} to="/timeline">By Timeline</Link>
                </li>
                </ul>
            </ul>
         

            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            
            

            </div> 

        );
    }
}

export default SideBar;