require('dotenv').config();
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
// read & set environmental variables with the dotenv package


// Able to access my keys informaiton


var spotify = new Spotify(keys.spotify);

// switch (command) {
//   case `movie-this`:
//     text = userInput;
//     break;
//     case `spotify-this-song`:
//       text = userInput;
//       break;
// }

var songAPI = function (song) {
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


  // var concertSearch = function (concert) {
  //   var divider = "\n------------------------------------------------------------\n\n";

  //   var concertURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  //   axios.get(concertURL).then(function (response) {
  //     console.log(response)
  //     var concertData = response.data[0];

  //     var concertData = [
  //       "Venue: " + concertData.offers.venue.name,
  //       "Location: " + concertData.offers.venue.city,
  //       "Date: " + concertData.datetime,
  //     ].join("\n\n");

  //     fs.appendFile("log.txt", concertData + divider,
  //       function (err) {
  //         if (err) throw err;
  //         console.log(concertData);
  //       })
  //   })
  // };

  var searchMovie = function (movie) {
    // divider will be used as a spacer between the tv data we print in log.txt
    var divider = "\n------------------------------------------------------------\n\n";

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
          console.log(movieData);
        };
      });
    });
  };


  var command = process.argv[2];
  // console.log("Input Command:" + command)

  var userInput = process.argv.slice(3).join(" ");
  // console.log("User Input: " + userInput)

  if (command === `movie-this`) {
    searchMovie(userInput)
  }
  else if (command === `spotify-this-song`) {
    songAPI(userInput)
  }
