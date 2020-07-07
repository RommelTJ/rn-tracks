import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context as AuthContext} from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText={"Sign In To Your Account"}
        errorMessage={state.errorMessage}
        submitButtonText={"Sign In"}
        onSubmit={signin}
      />
      <NavLink title="Don't have an account? Sign up instead." routeName="Signup" />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});

export default SigninScreen;
