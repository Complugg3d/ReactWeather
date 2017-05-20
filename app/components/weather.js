import React, { Component } from 'react';
import WeatherForm from 'weather-form';
import WeatherMessage from 'weather-message';
import { getTemp } from 'open-weather-map';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  handleSearch(location) {
    var that = this;

    this.setState({
      isLoading: true
    });
    getTemp(location).then((temp) => {
      that.setState({ location, temp, isLoading: false });

    }, (err) => {
      alert(err);
        that.setState({ isLoading: false });
    });
  }
  render() {
    let {isLoading, location, temp} = this.state;

    function renderMessage () {
      if(isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (<div>
      <h3>Weather component</h3>
      <WeatherForm onSearch={this.handleSearch.bind(this)}/>
      {renderMessage()}
    </div>);
  }
}

export default Weather;
