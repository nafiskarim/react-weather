// load axios
var axios = require('axios');

// generate base url
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=ed2bd45b8a4a50e77622fa6d319d3af3';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location); // avoiding encode problem
    var reqUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // using axiom node module
    return axios.get(reqUrl).then(function (res) {
      //debugger;
      //error check
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
