import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'signin', payload: token});
    navigate('TrackList', {});
  } else {
    navigate('loginFlow', {});
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    const token = response.data.token;
    await AsyncStorage.setItem('token', token);
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList', {});
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
  }
};

const signin = (dispatch) => async({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    const token = response.data.token;
    await AsyncStorage.setItem('token', token);
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList', {});
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  }
};

const signout = (dispatch) => {
  return () => {
    // TODO: Implement this
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);
