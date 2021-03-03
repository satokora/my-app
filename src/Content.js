import React, {Component} from 'react';
import './Content.css';
import Language from './Language';
import Topic from './Topic';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
          username: 'satokora',
          src: 'https://www.linkedin.com/in/satokokora/'
      };
    }
    render(){
        return(
            <div>
            {/* <Router> */}
            <Switch>
                {/* <Route exactly component={Language} pattern="/" />
                <Route exactly component={Language} pattern="/language" />
                <Route exactly component={Topic} pattern="/topic" /> */}
                <Route exact path="/Language" component={Language} />
        <Route exact path="/">
          <Redirect to="/Language" />
        </Route>
        <Route exact path="/Topic" component={Topic} />
                {/* <Route exactly component={Page3} pattern="/path3" />
                <Route component={Page404} /> */}
              </Switch>
            {/* <Language></Language> */}
            {/* </Router> */}
            </div>
        );
    }
}
export default Content;