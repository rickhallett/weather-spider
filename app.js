const yargs = require('yargs');
const request = require('request');

const geocode = require('./public/geocode.js');
const weather = require('./public/weather.js');

//object that stores the final passed argument from yargs
const argv = yargs
//config
  .options({
    address: {
      demand: true,
      alias: 'a',
      desecribe: 'Address to fetch weather for',
      //always parse 'a' as string
      string: true
    }
  })
  //require the help flag
  .help()
  .alias('help', 'h')
  .argv; //takes all configuration options, runs it through arguments and stores it in the variable

//app.js does not need to know a request was ever made. all it needs to do is pass the address and do something with the result, either an error message or address/lat/lng
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(`Address: ${JSON.stringify(results.address, undefined, 2)}`);
    weather.weatherReport(results, (weatherErrorMessage, weatherResults) => {
      if (weatherErrorMessage) {
        console.log(weatherErrorMessage);
      } else {
        console.log(`Weather report:  ${JSON.stringify(weatherResults, undefined, 2)}`);
      }
    });
  }
});