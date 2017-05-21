const React = require('react');
const ReactDOM = require('react-dom');
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'main';
import Weather from 'weather';
import About from 'about';
import Examples from 'examples';

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
//load custom css
require('style!css!applicationStyles')
$(document).foundation();


ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('app')
);
