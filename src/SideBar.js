import React, {Component} from 'react';
import './SideBar.css';
import avatar from './images/11066361.jpeg'; 
import Alert from 'react-bootstrap/Alert';

class SideBar extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div class="off-canvas off-canvas-sidebar-show">
            {/* <!-- off-screen toggle button --> */}
            <a class="off-canvas-toggle btn btn-primary btn-action" href="#sidebar-id">
                <i class="icon icon-menu"></i>
            </a>

            <div id="sidebar-id" class="off-canvas-sidebar">
                <div>
                <hr/>
                    <div class="profile-photo">
                        <img class="s-circle" width="30%" alt="avatar" src={avatar} />
                        <h5>Satoko Kora<br/><span lass="lang-ja"><ruby>高<rt>こう</rt>良<rt>ら</rt>智<rt>さと</rt>子<rt>こ</rt></ruby></span></h5>
                    </div>
                    <hr/>

                </div>
                <div class="tile">
                    <div class="tile-content">
                    <Alert variant="info">
                    Full-stack developer, Master's degree in IT in Illinois State University. Currently living in South LA, originally from Japan. Love being creative :)
  </Alert>
                        <p></p>

                    </div>

                </div>
                <ul class="nav">
                    <li class="nav-item">
                        <a href="#">Projects</a>
                    </li>
                    <li class="nav-item active">
                        <a href="#">Layout</a>
                        <ul class="nav">
                            <li class="nav-item">
                                <a href="#">Flexbox grid</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Responsive</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Navbar</a>
                            </li>
                            <li class="nav-item">
                                <a href="#">Empty states</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#">Components</a>
                    </li>
                    <li class="nav-item">
                        <a href="#">Utilities</a>
                    </li>
                </ul>
            </div>

            <a class="off-canvas-overlay" href="#close"></a>

            </div>
        );
    }
}

export default SideBar;