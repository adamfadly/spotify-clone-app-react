export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "d9ec2911ec2b445889f8025cc8db2e78";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// ("http://localhost:3000/#access_token=BQARDpcM3M8WHq6B_013hb-yBq_F_sawtNfdvD3Vf8BAbIXmB57zN2ZyUXcDR0ez2yZdjmL-OxWAMefGVhG4DPsuMMUpA_EZiUsX4WHXRXLLh13W9IBxTlOmuV8LdU5bKnnA6QwrqYBLLJBjU0MSZCB8GW6GfGo&token_type=Bearer&expires_in=3600");
