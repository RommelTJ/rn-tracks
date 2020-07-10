import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";

import "../_mockLocation"; // TODO: Remove this from PROD.
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const [error, setError] = useState(undefined);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        console.log('location: ', location);
      });
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => { startWatching().then(); }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      { error ? <Text>Please enable location services</Text> : undefined }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
