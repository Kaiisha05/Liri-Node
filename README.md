# LIRI-Node

LIRI (Language-Interpretation-Recognition-Interface) App takes in a parameter via command line using node and gives you back data.

App will search Spotify, Bands In Town and OMDB.

Command:'spotify-this-song' 
User will be able to input a track name and the Spotify API will return:
Artist(s) name, Name of the song, link to a clip of the song and the name of the album.

Command: 'movie-this'
When user inputs the name of a movie axios combined with the OMDB API will return:
Title, Release Date, Rating, Rotten Tomatoes Rating, Country it was produced in, Language, Plot and Actor(s).

When used inputs the name of an artist/band. The Bands In Town along with axios will return;
Venue, location adn venue.

When the user inputs the commands, the information will populate in the terminal. With the OMDB it will also append to the log.txt file.

#Node Packages Included:
Node-Spotify-API
Axios:
    OMDB API
    Bands in Town API
Moment
DotEnv

#App Demo (Silent):
https://drive.google.com/file/d/1tTg2Uy5BispGMfcpepcPTzmCs4zLfufg/view




#Link to deployed app:
https://kaiisha05.github.io/Liri-Node/



<!-- upload video with sound walking through what the app does
video to include the app in use.

Still need to clean up the code and add in the default searches in the event of no user input as well as update the time/date on bands in town using moment.js -->
