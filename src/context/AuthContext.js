import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({email, password}) => {
    // TODO: Implement this
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

export const { Provider, Context } = createDataContext(authReducer, {}, { isSignedIn: false });
