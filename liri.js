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
// var moment = require ("moment");


switch (command) {
  case (`concert-this`):
    concertSearch(userInput);
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
    console.log("Whoops, try again!")
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
        //  ].join("\n\n");
      } else {
        let spotifyData = data.tracks.items[0];
        // console.log(musicData);
        console.log("Artist: " + spotifyData.artists[0].name);
        console.log("Song's Name: " + spotifyData.name);
        console.log("Link: " + spotifyData.preview_url);
        console.log("Album: " + spotifyData.album.name);
        // }
      }
      if (song === "The Sign") {
        console.log(divider, spotifyData);
      }
    });
};


function concertSearch(artist) {
  var location = ""
  var concertURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios.get(concertURL).then(function (response) {

    // console.log("this works")
    var concertData = response.data[0];

    
    console.log(concertData);
    var bandsData = [
      "Where to see: " + artist,
      "Venue: " + concertData.venue.name,
      "Location: " + concertData.venue.city + "," + location,
      "Date: " + concertData.datetime
    //   // date format needs to be (MM/DD/YYYY)...use moment
    ].join("\n\n");
    // console.log(bandsData);
    fs.appendFile("log.txt", bandsData + divider, function (err) {
      if (err) {
        console.log("Error: " + err);
      } else {
        console.log("Check log.txt");
      };
    });
  }
)
}


function searchMovie(movie) {
  var movieURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  axios.get(movieURL).then(function (response) {
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

function defaultSong() {
  // This block of code will read from the "random.txt" file.
  // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
  // The code will store the contents of the reading inside the variable "data"
  fs.readFile("random.txt", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log("Error: " + error);
    }
    // Then split it by commas (to make it more readable)
    var randomText = data.split(",");
    // insert the item that is 2nd within the random.txt file within the songAPI parameters
    songAPI(randomText[1]);
    // searchMovie(randomText[1]);
    // movie-this, "The Grinch"
    // concertSearch(randomText[1]);
    // concert-this, "Tina Turner"
  });
}


/* ---------- TESTING --------- */
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