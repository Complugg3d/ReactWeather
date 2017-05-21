import React, { Component } from 'react';

// class WeatherMessage extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let {temp, location} = this.props;
//     return (<div>
//       <p>It is {temp} in {location}</p>
//     </div>);
//   }
// }

const WeatherMessage = ({temp, location}) => {
  return (<h3 className="text-center">It is {temp} in {location}</h3>);
}

export default WeatherMessage;
