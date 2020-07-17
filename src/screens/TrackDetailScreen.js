import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = (props) => {
  const { navigation } = props;
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(t => t._id === _id);

  return (
    <View>
      <Text style={{fontSize: 48}}>Track Detail Screen: {track.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
