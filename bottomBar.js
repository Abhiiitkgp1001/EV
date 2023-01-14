import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { mdiTelevisionClassic } from '@mdi/js';
const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const BottomBar = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: 'black',
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action color='white' icon='youtube-tv' onPress={() => {}} />
      <Appbar.Action color='grey' icon="oil-temperature" onPress={() => {}} />
      <Appbar.Action color='grey'icon="power-plug" onPress={() => {}} />
      <Appbar.Action color='grey'icon="current-dc" onPress={() => {}} />
      <Appbar.Action color='grey'icon="power" onPress={() => {}} />
      <Appbar.Action color='grey'icon="google-maps" onPress={() => {}} />
      <Appbar.Action color='yellow'icon="access-point" onPress={() => {}} />

    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    paddingLeft:20,
    paddingRight:20,
    left: 0,
    right: 0,
    bottom: 0,
    flex:1,
    justifyContent:'space-between'
  },
});

export default BottomBar;