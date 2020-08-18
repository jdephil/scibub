import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { Flower } from './components/Flower'
declare module 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Flower} />
      </Router>
    </div>
  );
}

export default App;
