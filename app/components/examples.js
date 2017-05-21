import React, { Component } from 'react';
import { Link } from 'react-router';

var Examples = (props) => {
  return (<div>
    <h1 className="text-center page-title">Examples</h1>
    <p>Here are a few examples locations to try out;</p>
    <ol>
      <li>
        <Link to='/?location=morelia'>Morelia, Mich</Link>
      </li>
      <li>
        <Link to='/?location=Rio'>Rio Brasil</Link>
      </li>
    </ol>
  </div>);
}

export default Examples;
