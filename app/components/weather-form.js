import React, { Component } from 'react';

class WeatherForm extends Component {
  onFormSubmit(e) {
    e.preventDefault();
    let location = this.refs.location.value;
    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }
  render() {
    return (<div>
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <div><input type='text' ref="location" /></div>
        <button className="button expanded hollow">Get Weather</button>
      </form>
    </div>);
  }
}

export default WeatherForm;
