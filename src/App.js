import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import Welcome from './components/Welcome';
import Login from './components/Login';

import './App.css';

class App extends React.Component {
  state = { loggedin: false, username: 'test', password: 'test' }

  handleSubmit = (username, password) => {
    if(username === this.state.username && password === this.state.password) {
      this.setState({ loggedin: true });
      window.location.hash = '/welcome';
    }
  }

  render() {
    const { loggedin } = this.state;

    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" render={routerProps => <Login {...routerProps} onSubmit={this.handleSubmit} />}/>
          <LockedRoute
            loggedin={loggedin}
            exact
            path="/welcome"
            render={routerProps => <Welcome {...routerProps}/>}
          />
          <Route render={() => <Redirect to="/login" />} />
        </Switch>
      </HashRouter>
    );
  }
}

function LockedRoute(props) {
  if (!props.loggedin) {
    return <Redirect to="login" />
  } else {
    return <Route {...props} />
  }
}

export default App;
