import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  return (
    <>
      <Text style={{fontSize: 48}}>Account Screen</Text>
      <Spacer><Button title="Sign Out" onPress={signout} /></Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
