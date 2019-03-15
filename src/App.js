import React, { Component } from 'react';
import AVLWidget from './AVLWidget.js';
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
