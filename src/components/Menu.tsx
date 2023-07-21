import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const Menu = () => {
  const navigation = useNavigation();

  const handleNavigateToDive = () => {
    navigation.navigate('Dive');
  };

  const handleNavigateToSite = () => {
    navigation.navigate('Site');
  };

  const handleNavigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row',
      height: 150,
      width: 300,
      backgroundColor: 'yellow',
      padding: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Button title="Page Dive" onPress={handleNavigateToDive} />
      <Button title="Page Site" onPress={handleNavigateToSite} />
      <Button title="Page Profil" onPress={handleNavigateToProfile} />
    </View>
  );
};

export default Menu;
