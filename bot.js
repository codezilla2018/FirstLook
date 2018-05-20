console.log('the bot is starting.');

var Twit = require('twit');
var feed = require('feed-read-parser');

var config = require('./config');

var Bot = new Twit(config);

getFeed();

function getFeed() {
    feed("https://www.youtube.com/feeds/videos.xml?channel_id=UCT0hbLDa-unWsnZ6Rjzkfug", function(err,articles) {
        if(err) {
            throw new Error(err.message);
        } else {   

			
            tweet = "" + articles[0].title + ' \n #FirstLook #NewTrailer #NewMovie ' + articles[0].link;
			Tweet(tweet);	
			setInterval( getFeed, 60*1000 );	//6*60*60*1000	= 6 HOURS
        }
    });
}

function Tweet(tweet) {
    Bot.post('statuses/update', {status: tweet }, function(err, data,response) {
        if (err) {
				console.log(err);
        } else {
            console.log('Bot Tweeted');
        }
    });
}

 
