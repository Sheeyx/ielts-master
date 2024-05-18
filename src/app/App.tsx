import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, useLocation } from "react-router-dom";


function App() {
  return (
    <div className="app">
        <Switch>
          <Route path="/">
            Home
          </Route>
      </Switch>
    </div>
  );
}

export default App;
