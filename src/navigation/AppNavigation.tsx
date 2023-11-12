import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Account from '../assets/account.svg';
import AccountActive from '../assets/account_active.svg';
import Home from '../assets/home.svg';
import HomeActive from '../assets/home_active.svg';
import Map from '../assets/map.svg';
import MapActive from '../assets/map_active.svg';
import ScubaDiving from '../assets/scuba_diving.svg';
import ScubaDivingActive from '../assets/scuba_diving_active.svg';
import DiveScreen from '../screens/DiveScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SiteScreen from '../screens/SiteScreen';
import {globalStyles} from '../styles/theme';

const AppNavigation = () => {
  const [screen, setScreen] = useState('Dives');

  const getHomeIcon = () => {
    if (screen === 'Home') {
      return <HomeActive width={styles.icon.width} />;
    }
    return <Home width={styles.icon.width} />;
  };

  const getDiveIcon = () => {
    if (screen === 'Dives') {
      return <ScubaDivingActive width={styles.icon.width} />;
    }
    return <ScubaDiving width={styles.icon.width} />;
  };

  const getMapIcon = () => {
    if (screen === 'Sites') {
      return <MapActive width={styles.icon.width} />;
    }
    return <Map width={styles.icon.width} />;
  };

  const getProfileIcon = () => {
    if (screen === 'Profile') {
      return <AccountActive width={styles.icon.width} />;
    }
    return <Account width={styles.icon.width} />;
  };

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
          {getHomeIcon()}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen('Dives')}>
          {getDiveIcon()}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen('Sites')}>
          {getMapIcon()}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen('Profile')}>
          {getProfileIcon()}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppNavigation;
