import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AddCircle from '../assets/add_circle.svg';
import DiveCard from '../components/DiveCard';
import AddDiveScreen from './AddDiveScreen';

const DiveScreen = () => {
  const [screen, setScreen] = useState('DivesList');

  const renderScreen = () => {
    switch (screen) {
      case 'DivesList':
        return (
          <View>
            <DiveCard depth={59} duration={20} />
            <DiveCard depth={35} duration={45} />
          </View>
        );
      case 'AddDive':
        return <AddDiveScreen />;
      default:
        return (
          <View>
            <DiveCard depth={59} duration={20} />
            <DiveCard depth={35} duration={45} />
          </View>
        );
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setScreen('AddDive')}>
        <AddCircle />
        <Text>New dive</Text>
      </TouchableOpacity>
      {renderScreen()}
    </View>
  );
};

export default DiveScreen;
