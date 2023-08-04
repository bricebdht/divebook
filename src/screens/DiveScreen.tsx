import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AddCircle from '../assets/add_circle.svg';
import ArrowBack from '../assets/arrow_back.svg';
import {globalStyles} from '../styles/theme';
import AddDiveScreen from './AddDiveScreen';
import DiveListScreen from './DiveListScreen';

const DiveScreen = () => {
  const [screen, setScreen] = useState('DivesList');

  const renderScreen = () => {
    switch (screen) {
      case 'DivesList':
        return <DiveListScreen />;
      case 'AddDive':
        return <AddDiveScreen />;
      default:
        return <DiveListScreen />;
    }
  };

  const styles = StyleSheet.create({
    topMenu: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 10,
    },
    menuTitle: {
      color: globalStyles.fontColor,
      fontSize: 26,
      fontWeight: 'bold',
    },
    menuLeftElements: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 35,
    },
    backIcon: {
      marginRight: 20,
    },
  });

  return (
    <View>
      {screen === 'DivesList' ? (
        <View style={styles.topMenu}>
          <Text style={styles.menuTitle}>Dives</Text>
          <TouchableOpacity onPress={() => setScreen('AddDive')}>
            <AddCircle width={styles.icon.width} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.topMenu}>
          <View style={styles.menuLeftElements}>
            <TouchableOpacity
              style={styles.backIcon}
              onPress={() => setScreen('DivesList')}>
              <ArrowBack width={styles.icon.width} />
            </TouchableOpacity>
            <Text style={styles.menuTitle}>New dive</Text>
          </View>
        </View>
      )}
      {renderScreen()}
    </View>
  );
};

export default DiveScreen;
