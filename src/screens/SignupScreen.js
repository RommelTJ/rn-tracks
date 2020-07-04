import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = (props) => {
  const { navigation } = props;

  return (
    <>
      <Text style={{fontSize: 48}}>Sign Up Screen</Text>
      <Button title="Go to SignIn" onPress={() => navigation.navigate("Signin")} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
