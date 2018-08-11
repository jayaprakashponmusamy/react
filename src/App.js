import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';
const User = (params) => {
  return (<p> Welcomt user {params.username}</p>)
}
class App extends Component {
  state = {
    loggedIn: false
  }

  loggedInHandle = () => {
    this.setState({loggedIn: true});
  }
  render() {

    return (
      <Router>
        <div class="wrapper">
          <ul>
            <li><NavLink to="/" class="link" activeClass="active">Home</NavLink></li>
            <li><NavLink to="/about" class="link">About</NavLink></li>
            <li>User<ul>
            <li><NavLink to="/user/raja" class="link">Raja</NavLink></li>
            <li><NavLink to="/user/rahman" class="link">Rahman</NavLink></li>
            </ul></li>
          </ul>
          <input type="button" value="Log in" onClick={this.loggedInHandle.bind(this)}/>
          <p>{this.state.loggedIn?'true':'false'}</p>
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
          <Route path="/user/:username" exact strict render={
            ({match})=>{
              return (
              this.state.loggedIn ?(<User username={match.params.username}/>):(<Redirect to="/about"/>)
            )}
          } />
        </div>
      </Router>
    );
  }
}

export default App;
