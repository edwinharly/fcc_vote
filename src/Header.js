import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Voty Vote</a>
                </div>
            
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                  <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/" activeStyle={{color: 'white'}}>Home <span className="sr-only">(current)</span></Link></li>
                    <li><Link to="/mypolls" activeStyle={{color: 'white'}}>My Polls</Link></li>
                    <li><Link to="/newpoll" activeStyle={{color: 'white'}}>New Poll</Link></li>
                    <li><a className="btn btn-primary" href="#">Sign </a></li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">Guest <span className="caret"></span></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><button className="btn btn-primary">Sign</button></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        );
    }
}

export default Header;