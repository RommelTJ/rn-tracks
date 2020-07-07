import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = (props) => {
  const { navigation } = props;
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText={"Sign Up for Tracker"}
        errorMessage={state.errorMessage}
        submitButtonText={"Sign Up"}
        onSubmit={signup}
      />
      <Spacer>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.link}>Already have an account? Sign in instead.</Text>
        </TouchableOpacity>
      </Spacer>
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
  },
  link: {
    color: 'blue'
  }
});

export default SignupScreen;
