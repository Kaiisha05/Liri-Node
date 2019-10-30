var axios = require("axios");
var fs = require("fs");
// read & set environmental variables with the dotenv package
require("dotenv").config();

// Able to access my keys informaiton
//   var spotify = new Spotify(keys.spotify);



//  9. Make it so liri.js can take in one of the following commands:


var searchMovie = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  //    * `movie-this`
  this.findMovie= function(movie) {
    var URL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;
  
      var showData = [
        "Title: " + jsonData.Title,
        "Release Date: " + jsonData.Year.join(", "),
        "Rating: " + jsonData.Rated,
        "Rotten Tomatoes Rating: " + jsonData.Ratings[1].source, 
        "Country Produce: " + jsonData.Country,
        "Language:" + jsonData.Language,
        "Plot:" + jsonData.Plot,
        "Actors:" + jsonData.Actors.join(", ")
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("random.txt", showData + divider, function(err) {
        if (err) throw err;
        console.log(showData);
      });
    });
  };



};
searchMovie();


//    * `concert-this`

//    * `spotify-this-song`



//    * `do-what-it-says`*/
