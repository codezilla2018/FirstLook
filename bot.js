console.log('the bot is starting.');

var Twit = require('twit');

var config = require('./config');

var Bot = new Twit(config);


T.post('statuses/update', { status: 'twitterBot #twitterBot' }, function(err, data, response) {
    console.log(data)
  })



 