import React from 'react';
import Language from '../Pages/Language';
import Topic from '../Pages/Topic';
import { Route, Switch, Redirect } from 'react-router-dom';
import Content from "../Components/Content";

export const Routes = () => {
  return (
    <div>
   
   <Content>
   <Switch>
        <Route exact path="/Language" component={Language} />
        <Route exact path="/">
          <Redirect to="/Language" />
        </Route>
        <Route exact path="/Topic" component={Topic} />
      </Switch>
              
              </Content>
      
    </div>
  );
};