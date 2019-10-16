import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Menu from '../Menu/Menu';
import PostFeed from '../PostFeed/PostFeed';
import Homepage from '../Homepage/Homepage';
import Account from '../Account/Account';
import Signup from '../Signup/Signup';
import CreateGroup from '../CreateGroup/CreateGroup';

class App extends React.Component{

  render(){
    localStorage.lastUrl = window.location.pathname;
    return(
      <div>
        <nav>
          <Menu/>
        </nav>
        <main>
         <Switch>
          {/* 
            landing page 
            and login
          */}
          <Route
            exact
            path="/"
            component={Homepage}
          />

          <Route
            path="/signup"
            component={Signup}
          />

           {/* logged in home page */}
          <Route
            path="/home"
            component={PostFeed}
          />

        {/* account info and edit */}
          <Route
            path="/account"
            component={Account}
          />

          {/* create a new group */}
          <Route
            path="/make-group"
            component={CreateGroup}
          />

         </Switch>
        </main>
      </div>
    );
  }
}

export default App;
