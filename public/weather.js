const request = require('request');

let weatherReport = (location, callback) => {

  request({
    url: `https://api.darksky.net/forecast/ae5b25302ca8eb5eeb9fd45bbdd7c634/${location.latitude},${location.longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        precipitationProbability: body.currently.precipProbability,
        humidity: body.currently.humidity,
        windspeed: body.currently.windspeed
      });
    } else {
      callback('Unable to fetch weather');
    }
  })

};

module.exports = {
  weatherReport
}
