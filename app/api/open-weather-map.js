import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a11c63d159efc7e6d77f0d6fdd462e1e&units=metric';

export function getTemp(location) {
  var encodedLocation = encodeURIComponent(location);
  var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  return axios.get(requestUrl).then((res) => {
    
    if(res.data.cod && res.data.message) {
      throw res.data.cod;
    } else {
      return res.data.main.temp;
    }
  }, (res) => {
    throw (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
  });
};
