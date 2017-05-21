import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);location.value
  }
  onSearch(e) {
    e.preventDefault();
    var { location } = this.refs;

    if(location.value && location.value.length > 0) {
      var encodedLocation = encodeURIComponent(location.value);
      this.refs.location.value = '';
      window.location.hash = `#/?location=${encodedLocation}`;
    }
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
              <input type="search" ref="location" placeholder="Search weather by city" />
            </li>
            <li><input type="submit" className="button" value="Get Weather"/></li>
          </ul>
        </form>
      </div>
    </div>);
  }
}

export default Nav;
