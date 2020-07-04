import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

const SignupScreen = (props) => {
  const { navigation } = props;

  return (
    <>
      <Text h3>Sign Up for Tracker</Text>
      <Input label="Email" />
      <Input label="Password" />
      <Button title="Sign Up" />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
