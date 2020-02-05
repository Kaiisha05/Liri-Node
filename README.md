# LIRI-Node

LIRI (Language-Interpretation-Recognition-Interface) App takes in a parameter via command line using node and gives you back data.

App will search Spotify, Bands In Town and OMDB.

## Command:'spotify-this-song' 
User will be able to input a track name and the Spotify API will return:
Artist(s) name, Name of the song, link to a clip of the song and the name of the album. The information will also append to the log.txt file.

## Command: 'movie-this'
When the User inputs the name of a movie axios combined with the OMDB API will return:
Title, Release Date, Rating, Rotten Tomatoes Rating, Country it was produced in, Language, Plot and Actor(s).

## Command: 'concert-this'
When the User inputs the name of an artist/band. The Bands In Town along with axios will return;
Venue, location and venue.

## Command: 'do-what-it-says'
When the User inputs this command, it will respond with the default command of spotify-this-song with the choice of "The Sign"

When the user inputs the commands, the information will populate in the terminal. With the OMDB it will also append to the log.txt file.

In the event a command is entered without any additonal information, it will provide default data for 'movie-this' and 'spotify-this-song'.

# Node Packages Included:
Node-Spotify-API
Axios:
    OMDB API
    Bands in Town API
Moment
DotEnv

# App Demo (Silent):
https://drive.google.com/file/d/1tTg2Uy5BispGMfcpepcPTzmCs4zLfufg/view


# App Demo (Verbal Demostration):
https://drive.google.com/file/d/12Nmp_WkuM4oJSO5-BqjN5SrBNgk0CVGh/view

# Link to deployed app:
https://kaiisha05.github.io/Liri-Node/

* In the event you chose to clone this app, you will need to supply your own .env file and establish your API keys.

<!-- upload video with sound walking through what the app does
video to include the app in use.

Still need to update the time/date on bands in town using moment.js -->
