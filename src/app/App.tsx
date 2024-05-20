import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, useLocation } from "react-router-dom";
import Header from './components/header';
import { Banner } from './components/banner';


function App() {
  return (
    <div className="app">
      <Banner />
      <Header/>
      <Switch>
        <Route path="/">
          Home
        </Route>
      </Switch>
    </div>
  );
}

export default App;
