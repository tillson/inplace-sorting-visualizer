import React, { Component } from 'react';
import SortWidget from './SortWidget.js';
import NavBar from './NavBar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <div className="container-fluid sort-container">
          <SortWidget></SortWidget>
        </div>
      </div>
    );
  }
}

export default App;
