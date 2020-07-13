import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";

// import "../_mockLocation"; // TODO: Remove this from PROD.
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const [error, setError] = useState(undefined);
  const { addLocation } = useContext(LocationContext);

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
        addLocation(location);
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
