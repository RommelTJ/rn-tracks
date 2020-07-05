import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({email, password}) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response);
    } catch (err) {
      console.log("error: ", err.message);
    }
  };
};

const signin = (dispatch) => {
  return ({email, password}) => {
    // TODO: Implement this
  };
};

const signout = (dispatch) => {
  return () => {
    // TODO: Implement this
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);
