import React from 'react';
import { StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  const initialRegion = { latitude: 37.33233, longitude: -122.03121, latitudeDelta: 0.01, longitudeDelta: 0.01 };
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({latitude: initialRegion.latitude + i * 0.001, longitude: initialRegion.longitude + i * 0.001});
    } else {
      points.push({latitude: initialRegion.latitude - i * 0.002, longitude: initialRegion.longitude - i * 0.002});
    }
  }

  return (
    <MapView style={styles.map} initialRegion={initialRegion}>
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { height: 300 }
});

export default Map;
