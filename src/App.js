import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import AdminLayout from './layouts/Admin/Admin';

import './assets/scss/black-dashboard-react.scss';
import './assets/demo/demo.css';
import './assets/css/nucleo-icons.css';

const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
    );
  }
}

export default App;
