import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromURL } from "./Services/Spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";

import { useDataLayerValue } from "./Helpers/DataLayer";

const spotifyPkg = new SpotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const responseUrl = getTokenFromURL();
    window.location.hash = "";
    const _token = responseUrl.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotifyPkg.setAccessToken(_token);

      spotifyPkg.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
