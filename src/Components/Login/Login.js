import React from "react";
import "../../Styles/Login.css";
import { loginURL } from "../../Services/Spotify/spotify";

function Login() {
  return (
    <div className="login">
      <div classname="logo">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
      </div>
      <div>
        <a className="button__redirect" href={loginURL}>
          LOGIN WITH SPOTIFY
        </a>
      </div>
    </div>
  );
}

export default Login;
