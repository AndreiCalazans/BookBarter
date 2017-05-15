import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory , Route, IndexRoute} from 'react-router';
import './style/style.scss';

import Main from './components/Main';
import Home from './components/Home';


ReactDOM.render(

    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>,
  document.getElementById('root')
)
