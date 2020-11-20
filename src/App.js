import React from 'react';
import {BrowserRouter as Router, Switch,} from 'react-router-dom';
import './App.css';
import Routes from './routes'


function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
