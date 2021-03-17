export const initialState = {
  token:
    "BQBADFI4GF1PEvjvWdmDNkHpq0QBiA62nw-TByPRhDOoOpFYUe0sJqVAK8RW2Ey-LcToMjaJ2-ZH0y7GazgTL_iwQUtfNJ1LBXCeuh3mkPaWM5nTFdy7S3rQDBL-b_9NIMvnM3icRaF_xF9VpVur8Cey7Y5_S9c",
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
