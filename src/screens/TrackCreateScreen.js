import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from "react-navigation";

import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = (props) => {
  const { isFocused } = props;
  const { addLocation, state: { recording } } = useContext(LocationContext);
  const callback = useCallback((location) => addLocation(location, recording), [recording]);
  const [error] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      { error ? <Text>Please enable location services</Text> : undefined }
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
