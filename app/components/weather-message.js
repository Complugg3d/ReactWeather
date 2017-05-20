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
  return (<div>
    <p>It is {temp} in {location}</p>
  </div>);
}

export default WeatherMessage;
