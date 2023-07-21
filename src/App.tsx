import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Menu from './components/Menu';
import AppNavigation from './navigation/AppNavigation';

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
        <AppNavigation />
        <Menu />
      </View>
    </NavigationContainer>
  );
}
