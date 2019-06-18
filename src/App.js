import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route path='/' component={Home} />
        <Route path='/avengers' component={AvengersList} />
      </div>
    );
  }
}

export default App;
