import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

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

const createTrack = (dispatch) => async (name, locations) => {
  const x = await trackerApi.post('/tracks', { name, locations });
  dispatch({ type: 'create_track' });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
