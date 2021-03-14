import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromURL } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const responseUrl = getTokenFromURL();
    window.location.hash = "";
    const _token = responseUrl.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="app">
      {token ? <h1>yeayyy masukkkk</h1> : <Login />}
      {/* <Login /> */}
    </div>
  );
}

export default App;
