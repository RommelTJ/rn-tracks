import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from "react-native-maps";

import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = (props) => {
  const { navigation } = props;
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={{fontSize: 48}}>Track Detail Screen: {track.name}</Text>
      <MapView
        initialRegion={{ longitudeDelta: 0.01, latitudeDelta: 0.01, ...initialCoords }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(l => l.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: { height: 300 }
});

export default TrackDetailScreen;
