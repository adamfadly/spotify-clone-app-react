export const initialState = {
  // token:
  // null,
  // "BQBADFI4GF1PEvjvWdmDNkHpq0QBiA62nw-TByPRhDOoOpFYUe0sJqVAK8RW2Ey-LcToMjaJ2-ZH0y7GazgTL_iwQUtfNJ1LBXCeuh3mkPaWM5nTFdy7S3rQDBL-b_9NIMvnM3icRaF_xF9VpVur8Cey7Y5_S9c",
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
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
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
