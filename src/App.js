import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Home from './Home/Home.js';
import MyPolls from './MyPolls/MyPolls.js';
import NewPoll from './NewPoll/NewPoll.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/mypolls" component={MyPolls}/>
            <Route path="/newpoll" component={NewPoll}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
