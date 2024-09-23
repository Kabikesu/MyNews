const moment = require('moment');

// Get the current date and time
const currentTime = moment();

// Format the date and time string
const dateTimeString = currentTime.format('dddd, MMMM D, YYYY h:mm:ss A');

// Update the date and time every second
setInterval(() => {
  const currentTime = moment();
  const dateTimeString = currentTime.format('dddd, MMMM D, YYYY h:mm:ss A');
  document.getElementById('datetime').innerHTML = dateTimeString;
}, 1000);
