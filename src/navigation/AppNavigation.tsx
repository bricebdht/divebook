import React, {useState} from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import Map from '../assets/map.svg';
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
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 10,
      backgroundColor: globalStyles.primaryColor,
      marginBottom: 10,
      marginHorizontal: 15,
      paddingVertical: 10,
    },
    button: {width: 40, height: 40},
    icon: {width: 30, height: 20},
  });

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setScreen('Dives')}>
          <Map width={styles.icon.width} />
        </TouchableOpacity>
        <Button title="Sites" onPress={() => setScreen('Sites')} />
        <Button title="Profile" onPress={() => setScreen('Profile')} />
      </View>
      {renderScreen()}
    </View>
  );
};

export default AppNavigation;
