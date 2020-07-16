import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return state;
    case "create_track":
      return state;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {
  dispatch({ type: 'fetch_tracks' });
};

const createTrack = (dispatch) => (name, locations) => {
  dispatch({ type: 'create_track' });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
