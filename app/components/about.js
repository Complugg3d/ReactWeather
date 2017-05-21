import React, { Component } from 'react';
import { Link } from 'react-router'

var About = (props) => {
  return (<div>
    <h1 className="text-center">Examples</h1>
    <p className="text-center">This was a page created in the course The complete React Web Developer course</p>
    <p className="text-center">
      And you will find it in here<br/>
      <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview">Click here</a>
    </p>
    <p className="text-center">
      This is the git repo of the code<br/>
      <span className="label success">
        <a href="https://github.com/Complugg3d/ReactWeather">Git Repo</a>
      </span>
    </p>

  </div>);
}

export default About;
