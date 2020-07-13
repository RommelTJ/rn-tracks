import { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location";

export default (callback) => {
  const [error, setError] = useState(undefined);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        callback
      );
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => { startWatching().then(); }, []);

  return [error];
};
