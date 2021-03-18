import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromURL } from "./Services/Spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";

import { useDataLayerValue } from "./Helpers/DataLayer";

const spotifyFetch = new SpotifyWebApi();
function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const responseUrl = getTokenFromURL();
    window.location.hash = "";
    const _token = responseUrl.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotifyFetch.setAccessToken(_token);

      spotifyFetch.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotifyFetch.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotifyFetch.getPlaylist("37i9dQZEVXcTHHmktkgVyq").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  });
  console.log(token, "iiiiiiiii");

  return (
    <div className="app">
      {token ? <Player spotify={spotifyFetch} /> : <Login />}
    </div>
  );
}

export default App;
