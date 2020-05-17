import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Users from './container/Users';
import Login from './container/Login';
import UserDetail from './container/UserDetail';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        {/* <Users/> */}
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route path="/:campaignId/history" component={UserDetail} />
            <Route path="/" component={Login} />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
