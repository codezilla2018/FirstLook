# FirstLook                 
Firstlook is a twitter bot that will tweet about latest movies.This will check for a latest movie trailer from a youtube channel daily (every 24 hours) and if there is one, it will be tweeted with its YouTube trailer link. This is already deployed in heroku.

### Pre-requisites
- NodeJs

### Getting Started
Create a twitter app [here] 

Get consumer_key, consumer_secret, access_token and access_token_secret

Download or clone the project

Fill consumer_key, consumer_secret, access_token and access_token_secret accordingly in config.js file

Open command prompt and set path to the project folder. Then run ``` npm install ``` to install all the dependencies in package.json and ``` npm start ``` to start the bot.

You can add any youtube channel as your wish. Only you have to do is adding the id of the youtube channel instead of "UCT0hbLDa-unWsnZ6Rjzkfug" for https://www.youtube.com/feeds/videos.xml?channel_id=UCT0hbLDa-unWsnZ6Rjzkfug in bot.js file. Or if it is a youtube user that you want to target , then add https://www.youtube.com/feeds/videos.xml?user= followed by his/her youtube user name.

### Contribution Guide
- Fork it
- Create your feature branch ( ``` git checkout -b my-new-feature ``` )
- Commit your changes ( ``` git commit -am 'Add some feature' ``` )
- Push to the branch ( ``` git push origin my-new-feature ``` )
- Create new Pull Request

### License
This software is released under the MIT License.

##### Copyright (c) 2018 CodeZilla 2018

[here]: <https://apps.twitter.com/>
