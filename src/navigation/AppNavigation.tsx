import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Account from '../assets/account.svg';
import Home from '../assets/home.svg';
import Map from '../assets/map.svg';
import ScubaDiving from '../assets/scuba_diving.svg';
import DiveScreen from '../screens/DiveScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SiteScreen from '../screens/SiteScreen';
import {globalStyles} from '../styles/theme';

const AppNavigation = () => {
  const [screen, setScreen] = useState('Dives');

  const renderScreen = () => {
    switch (screen) {
      case 'Dives':
        return <DiveScreen />;
      case 'Sites':
        return <SiteScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <DiveScreen />;
    }
  };

  const styles = StyleSheet.create({
    appContainer: {display: 'flex', flex: 1},
    pagesContainer: {display: 'flex', flex: 1},
    menuContainer: {
      position: 'absolute',
      bottom: 10,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 10,
      backgroundColor: globalStyles.primaryColor,
      marginHorizontal: 10,
      paddingVertical: 7,
    },
    button: {
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {width: 23},
  });

  return (
    <View style={styles.appContainer}>
      <View style={styles.pagesContainer}>{renderScreen()}</View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen('Dives')}>
          <Home width={styles.icon.width} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen('Dives')}>
          <ScubaDiving width={styles.icon.width} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen('Sites')}>
          <Map width={styles.icon.width} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen('Profile')}>
          <Account width={styles.icon.width} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppNavigation;
