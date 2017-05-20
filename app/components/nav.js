import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = (props) => {
  return (<div>
    <h2>Nav component</h2>
    <IndexLink activeClassName='active' to='/'>Get Weather</IndexLink>
    <Link activeClassName='active' to='/about'>About</Link>
    <Link activeClassName='active' to='/examples'>Examples</Link>
  </div>);
}

export default Nav;
