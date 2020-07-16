import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from "../context/LocationContext";

import Spacer from "./Spacer";

const TrackForm = () => {
  const { startRecording, stopRecording, changeName, state } = useContext(LocationContext);
  const { name, recording, locations } = state;

  return (
    <>
      <Spacer>
        <Input onChangeText={changeName} value={name} placeholder="Enter name" />
      </Spacer>
      <Spacer>
        {
          recording
            ? <Button title="Stop" onPress={stopRecording} />
            : <Button title="Start Recording" onPress={startRecording} />
        }
      </Spacer>
      <Spacer>
        {
          !recording && locations.length
            ? <Button title="Save Recording" onPress={() => {}} />
            : undefined
        }
      </Spacer>
    </>
  );
};

export default TrackForm;
