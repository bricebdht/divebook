import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigation from './navigation/AppNavigation';

const styles = StyleSheet.create({
  container: {height: '100%', backgroundColor: 'white'},
  menu: {
    position: 'absolute',
    bottom: 0,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </NavigationContainer>
  );
}
