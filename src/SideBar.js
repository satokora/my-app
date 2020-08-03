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
            {/* <!-- off-screen toggle button --> */}
            <a className="off-canvas-toggle btn btn-primary btn-action" href="#sidebar-id">
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
                <ul class="nav">
                    <li class="nav-item active">
                        <a href="#">My Github Repositories</a>
                        <ul class="nav">
                            <li class="nav-item">
                                <a href="#">By Language</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">By Topic</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">By Timeline</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                    
                </div>

                    
            </div>

            <a className="off-canvas-overlay" href="#close"></a>

            </div>
        );
    }
}

export default SideBar;