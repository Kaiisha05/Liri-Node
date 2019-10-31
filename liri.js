require('dotenv').config();
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
// read & set environmental variables with the dotenv package


// Able to access my keys informaiton


var spotify = new Spotify(keys.spotify);

var songAPiI = function(song){
  spotify.search({ 
    type: 'track', 
    query: song,
    limit: 1
  }, 
   var musicData = [
     
   ]
  
  function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(data)
  })
};



var searchMovie = function(movie) {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

    var movieURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.get(movieURL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;
  
      var movieData = [
        "Title: " + jsonData.Title,
        "Release Date: " + jsonData.Year,
        "Rating: " + jsonData.Rated,
        "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value, 
        "Country Produce: " + jsonData.Country,
        "Language:" + jsonData.Language,
        "Plot:" + jsonData.Plot,
        "Actors:" + jsonData.Actors
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("random.txt", movieData + divider, function(err) {
        if (err) throw err;
        console.log(movieData);
      });
    });
  



};
var command = process.argv[2];
console.log("Input Command:" + command)

var userInput = process.argv[3];
console.log("User Input: " + userInput)


if (command === `movie-this`) {
  searchMovie(userInput)
}

else if (command === `spotify-this-song`) {
  songAPiI(userInput)
}
// searchMovie();



//    * `concert-this`

//    * 



//    * `do-what-it-says`*/
