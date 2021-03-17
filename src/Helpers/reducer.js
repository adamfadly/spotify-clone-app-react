export const initialState = {
  token: null,
  user: null,
  playlist: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action, "from reducer");

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        token: action.playlist,
      };

    default:
      return state;
  }
};

export default reducer;
