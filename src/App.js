import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';
const user = ({ match }) => {
  return (<p> Welcomt user {match.params.username}</p>)
}
class App extends Component {

  render() {

    return (
      <Router>
        <div class="wrapper">
          <ul>
            <li><NavLink to="/" class="link" activeClass="active">Home</NavLink></li>
            <li><NavLink to="/about" class="link">About</NavLink></li>
          </ul>
          <Route path="/" exact strict render={
            () => {
              return (<p> This is the home page</p>);
            }
          } />
          <Route path="/about" exact strict render={
            () => {
              return (<p> This is the about page </p>);
            }
          } />
          <Route path="/user/:username" exact strict component={user} />
        </div>
      </Router>
    );
  }
}

export default App;
