console.log('The bot is starting.');

var Twit = require('twit');
var feed = require('feed-read-parser');

var config = require('./config');
var Bot = new Twit(config);

getFeed();
// Call the getFeed function after every 24 hours 
setInterval( getFeed, 24*60*60*1000 );

/*
 Here we finds the latest released movie trailer from a YouTube channel
*/
function getFeed() {
    feed("https://www.youtube.com/feeds/videos.xml?channel_id=UCT0hbLDa-unWsnZ6Rjzkfug", function(err,articles) {
        if(err) {
            console.log(err.message);
        } else {   
            tweet = "" + articles[0].title + ' \n #FirstLook #NewMovie #NewTrailer ' + articles[0].link;
            // Pass the 'tweet' string to Tweet function as a parameter
            Tweet(tweet);	            
        }
    });
}

/* 
Then we tweets the string 
*/
function Tweet(tweet) {
    Bot.post('statuses/update', {status: tweet }, function(err, data,response) {
        if (err) {
			console.log(err.message);           
        } else {
            console.log('Bot Tweeted');
        }
    });
}

 
