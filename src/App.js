import React, { Component } from 'react';

import Home from './routes/home/Home';

import './App.scss';

/*
todo:
- setja upp react-helmet
- setja upp react-router
- sækja routes
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
