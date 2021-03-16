import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromURL } from "./Services/Spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";

const spotifyPkg = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const responseUrl = getTokenFromURL();
    window.location.hash = "";
    const _token = responseUrl.access_token;

    if (_token) {
      setToken(_token);
      spotifyPkg.setAccessToken(_token);
      spotifyPkg.getMe().then((user) => {
        console.log("ada user niuhhh 🥳", user);
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player /> : <Login />}
      {/* <Login /> */}
    </div>
  );
}

export default App;
