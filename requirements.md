Project Concept/workflow:

Dependencies: request, yargs

1. set up a static http request to the google location api
2. refactor the static request out of app.js, into geolocation.js
3. Use and configure yargs to make geolocation api request dynamic
4. set up static api request to weather.into
5. refactor api into weather.js
6. chain together callbacks to make single CLI input retrieve and print requested location and weather
7. take code from node-notes and refactor into a weather request logging system, to write new calls, read old calls and list all calls
8. Refactor asynchronous code into ES6 promises to escape callback logic