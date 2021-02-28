import React, {Component} from 'react';
import './SideBar.css';
//import avatar from './images/11066361.jpeg'; 
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as Constants from './Constants';

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
      notFound:''
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
    async componentDidMount() {
        this.fetchProfile();
        
        
      }

    render(){
        //let data = this.bio;
        return(
            <div>
            {/* <nav> 
            </nav> */}
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li>
                <hr/>
                    <div className="user-view amber lighten-5 center">
                    
                        <div className="background">
                        </div>
                        <a class="tooltipped" data-position="right" data-tooltip="Thank you for visiting my page!" href="#user"><img className="circle" src={this.state.avatar} /></a>
                        <h6>{this.state.name}<br/><span lass="lang-ja"><ruby>高<rt>こう</rt>良<rt>ら</rt>智<rt>さと</rt>子<rt>こ</rt></ruby></span></h6>
                        {/* <a href="#name"><span className="white-text name">{this.state.name}</span></a> */}
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
                <li><div className="divider"></div></li>
                <li><a  className="subheader" href="#!"><i className="material-icons">folder_open</i>My Github Repositories</a></li>
                {/* <li><div className="divider"></div></li> */}
                {/* <li><a className="subheader">Subheader</a></li> */}
                <li><a className="waves-effect" href="#!">By Language</a></li>
                <li><a className="waves-effect" href="#!">By Topic</a></li>
                <li><a className="waves-effect" href="#!">By Timeline</a></li>
                <li className="bold"><a className="collapsible-header waves-effect waves-teal">JavaScript</a>
              <div className="collapsible-body">
                <ul>
                  <li><a href="auto-init.html">Auto Init</a></li>
                  <li><a href="carousel.html">Carousel</a></li>
                  <li><a href="collapsible.html">Collapsible</a></li>
                  <li><a href="dropdown.html">Dropdown</a></li>
                  <li><a href="feature-discovery.html">FeatureDiscovery</a></li>
                  <li><a href="media.html">Media</a></li>
                  <li><a href="modals.html">Modals</a></li>
                  <li><a href="parallax.html">Parallax</a></li>
                  <li><a href="pushpin.html">Pushpin</a></li>
                  <li><a href="scrollspy.html">Scrollspy</a></li>
                  <li><a href="sidenav.html">Sidenav</a></li>
                  <li><a href="tabs.html">Tabs</a></li>
                  <li><a href="toasts.html">Toasts</a></li>
                  <li><a href="tooltips.html">Tooltips</a></li>
                  <li><a href="waves.html">Waves</a></li>
                </ul>
              </div>
            </li>
            </ul>

            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            
            
            {/* <!-- off-screen toggle button --> */}
            {/* <a className="off-canvas-toggle btn btn-primary btn-action" href="#sidebar-id">
                <i className="icon icon-menu"></i>
            </a>

            <div id="sidebar-id" className="off-canvas-sidebar">
                <div>
                <hr/>
                    <div className="profile-photo">
                        <img className="s-circle" width="30%" alt="avatar" src={this.state.avatar} />
                        <h5>{this.state.name}<br/><span lass="lang-ja"><ruby>高<rt>こう</rt>良<rt>ら</rt>智<rt>さと</rt>子<rt>こ</rt></ruby></span></h5>
                        <a target="_blank" href="https://linkedin.com/in/satoko-kora-223aa380"><FontAwesomeIcon icon={faLinkedin}  size="lg" /></a>&nbsp;
                        <a href="mailto:satokorambxl@gmail.com"><FontAwesomeIcon icon={faEnvelope}  size="lg" /></a>
                    </div>
                    <hr/>

                </div>
                <div className="tile">
                    <div className="tile-content">
                    <Alert variant="info">
                    {this.state.bio}
                    </Alert>
                        <p></p>
                        
                    </div>

                </div>
                <div>
                <ul className="nav">
                    <li className="nav-item active">
                        <a href="#">My Github Repositories</a>
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#">By Language</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">By Topic</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">By Timeline</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                    
                </div>

                    
            </div>

            <a className="off-canvas-overlay" href="#close"></a>*/}

            </div> 

        );
    }
}

export default SideBar;