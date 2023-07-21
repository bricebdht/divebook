import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import DiveScreen from './screens/DiveScreen';
import ProfileScreen from './screens/ProfileScreen';
import SiteScreen from './screens/SiteScreen';

const styles = StyleSheet.create({
  container: {height: '100%'},
  menu: {
    position: 'absolute',
    bottom: 0,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <DiveScreen />
        <ProfileScreen />
        <SiteScreen />
      </View>
    </NavigationContainer>
  );
}
