import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationEvents} from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = (props) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText={"Sign Up for Tracker"}
        errorMessage={state.errorMessage}
        submitButtonText={"Sign Up"}
        onSubmit={signup}
      />
      <NavLink title="Already have an account? Sign in instead." routeName="Signin" />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});

export default SignupScreen;
