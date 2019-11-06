require('dotenv').config();
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var divider = "\n------------------------------------------------------------\n\n";
var mrNobodyLink = "(link: http://www.imdb.com/title/tt0485947/)";
var defaultMessage = "If you haven't watched Mr. Nobody, then you should,";
var defaultMessage2 = "It's on Netflix!";
var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");


switch (command) {
  case (`concert-this`):
    concertSearch();
    break;
  case (`spotify-this-song`):
    if (userInput) {
      songAPI(userInput);
    } else {
      songAPI("The Sign");
    }
    break;
  case ('movie-this'):
    if (userInput) {
      searchMovie(userInput);
    } else {
      searchMovie("Mr. Nobody");
    }
    break;
  case ('do-what-it-says'):
    defaultSong();
    break;
  default:
    console.log("Try again!")
};


function songAPI(song) {
  spotify.search({
    type: 'track',
    query: song,
    limit: 1
  },
    function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
        // return;
        //  ].join("\n\n");
      } else {
        // for (var s = 0; s > data.tracks.items.length; s++) {
        let spotifyData = data.tracks.items[0];
        // console.log(musicData);
        console.log("Artist: " + spotifyData.artists[0].name);
        console.log("Song's Name: " + spotifyData.name);
        console.log("Link: " + spotifyData.preview_url);
        console.log("Album: " + spotifyData.album.name);
        // }
      }
    });
};


function concertSearch(artist) {
  // var divider = "\n------------------------------------------------------------\n\n";

  var concertURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios.get(concertURL).then(function (response) {

    // console.log("this works")
    var concertData = response.data[0];
    // console.log(concertData);
    var bandsData = [
      "Venue: " + concertData.venue.name,
      "Location: " + concertData.venue.city + "," + concertData.venue.region,
      "Date: " + concertData.datetime
      // date format needs to be (MM/DD/YYYY)...use moment
    ].join("\n\n");
    console.log(bandsData);
    fs.appendFile("log.txt", bandsData + divider, function (err) {
      if (err) {
        console.log("Error: " + err);
      } else {
        console.log("Check log.txt");
      };
    });
  })
};

function searchMovie(movie) {
  var movieURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  axios.get(movieURL).then(function (response) {
    // Place the response.data into a variable, jsonData.
    var jsonData = response.data;

    var movieData = [
      "Title: " + jsonData.Title,
      "Release Date: " + jsonData.Year,
      "Rating: " + jsonData.Rated,
      "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
      "Country Produce: " + jsonData.Country,
      "Language: " + jsonData.Language,
      "Plot: " + jsonData.Plot,
      "Actors: " + jsonData.Actors
    ].join("\n\n");

    // Append showData and the divider to log.txt, print showData to the console
    fs.appendFile("log.txt", movieData + divider, function (err) {
      if (err) {
        console.log("Error: " + err);
      } else {
        console.log(movieData)
        if (movie === "Mr. Nobody") {
          console.log(divider, defaultMessage, mrNobodyLink + ". " + defaultMessage2);
        }
      };
    });
  });
};


    // var command = process.argv[2];
    // console.log("Input Command:" + command)

    // var userInput = process.argv.slice(3).join(" ");
    // console.log("User Input: " + userInput)

    // if (command === `movie-this`) {
    //   searchMovie(userInput)
    // }
    // else if (command === `spotify-this-song`) {
    //   songAPI(userInput)
    // }
    // else if (command === `concert-this`) {
    //   concertSearch(userInput)
    // };