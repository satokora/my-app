import React, {Component} from 'react';
import './Content.css';
import Language from '../Pages/Language';
import Topic from '../Pages/Topic';
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
              <Switch>
                  <Route exact path="/Language" component={Language} />
                  <Route exact path="/">
                    <Redirect to="/Language" />
                  </Route>
                  <Route exact path="/Topic" component={Topic} />
              </Switch>
            </div>
        );
    }
}
export default Content;