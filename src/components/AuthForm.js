import React, { useState } from 'react';
import { StyleSheet } from "react-native";
import { Text, Button, Input } from 'react-native-elements';
import Spacer from "./Spacer";

const AuthForm = (props) => {
  const { headerText, errorMessage, onSubmit, submitButtonText } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
      </Spacer>
      { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : undefined }
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginHorizontal: 15
  }
});

export default AuthForm;
