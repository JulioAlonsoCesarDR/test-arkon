import React from 'react';
import Header from './components/Header';
import ListTask from './components/ListTask';
import NewTask from './components/NewTask';

import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListTask}/>
            <Route exact path="/task/newTask" component={NewTask}/>
            <Route exact path="/task/editTask/:id" component={NewTask}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
