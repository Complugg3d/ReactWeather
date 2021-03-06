import React, { Component } from 'react';
import WeatherForm from 'weather-form';
import WeatherMessage from 'weather-message';
import { getTemp } from 'open-weather-map';
import ErrorModal from 'error-modal';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorMessage: undefined
    };
  }
  handleSearch(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    getTemp(location).then((temp) => {
      that.setState({ location, temp, isLoading: false });

    }, (err) => {
      that.setState({ isLoading: false, errorMessage: err });
    });
  }
  componentDidMount(){
    var location = this.props.location.query.location;
    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  componentWillReceiveProps(nextProps) {
    var location = nextProps.location.query.location;
    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  render() {
    let { isLoading, location, temp, errorMessage } = this.state;

    function renderMessage () {
      if(isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} title="Error"/>
        );
      }
    }

    return (<div>
      <h1 className="text-center page-title">Get Weather</h1>
      <WeatherForm onSearch={this.handleSearch.bind(this)}/>
      {renderMessage()}
      {renderError()}
    </div>);
  }
}

export default Weather;
