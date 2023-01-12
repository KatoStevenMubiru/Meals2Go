function getCurrentTime() {
    // Get the current 'global' time from an API using Promise
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        var didSucceed = Math.random() >= 0.5;
        didSucceed ? resolve(new Date()) : reject('Error');
      }, 2000);
    })
  }
  getCurrentTime()
    .then(currentTime => getCurrentTime())
    .then(currentTime => {
      console.log('The current time is: ' + currentTime);
      return true;
    })
    .catch(err => console.log('There was an error:' + err))