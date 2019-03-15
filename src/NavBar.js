import React from 'react';

class NavBar extends React.Component {
    render() {
      return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container">
                <a href="/" className="navbar-brand">CS 1332 Sorting Homework Tester</a>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item"><a href="https://github.com/tillson/inplace-sorting-visualizer">Source</a></li>
                </ul>
            </div>
        </div>
      )
    }
  }

  export default NavBar;