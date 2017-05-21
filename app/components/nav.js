import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  onSearch(e) {
    e.preventDefault();
    alert('Not yet wired up');
  }
  render() {
    return (<div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Weather app</li>
          <li><IndexLink activeClassName='active' to='/'>Get Weather</IndexLink></li>
          <li><Link activeClassName='active' to='/about'>About</Link></li>
          <li><Link activeClassName='active' to='/examples'>Examples</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form onSubmit={this.onSearch.bind(this)}>
          <ul className="menu">
            <li>
              <input type="search" placeholder="search weather" />
            </li>
            <li><input type="submit" className="button" value="Get Weather"/></li>
          </ul>
        </form>
      </div>
    </div>);
  }
}

export default Nav;
