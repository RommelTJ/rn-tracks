import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);

  if (!currentLocation) return <ActivityIndicator size="large" style={{ marginTop: 200}} />;
  const initialRegion = { ...currentLocation.coords, latitudeDelta: 0.01, longitudeDelta: 0.01 };
  return (
    <MapView style={styles.map} initialRegion={initialRegion} region={initialRegion}>
      
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { height: 300 }
});

export default Map;
