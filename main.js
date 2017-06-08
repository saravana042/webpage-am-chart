import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './components/Home.jsx';
import Table from './components/Table.jsx';
import Charts from './components/Charts.jsx';
import Menu from './components/Menu.jsx';


ReactDOM.render((
   
   <Router history = {hashHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "table" component = {Table} />
         <Route path = "charts" component = {Charts} />
      </Route>
   </Router>
	
), document.getElementById('app'));
