import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from "react-navigation";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{fontSize: 48}}>Track Create Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
