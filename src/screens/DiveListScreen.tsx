import React from 'react';
import {View} from 'react-native';
import DiveCard from '../components/DiveCard';

const DiveListScreen = () => {
  return (
    <View>
      <View>
        <DiveCard depth={59} duration={20} />
        <DiveCard depth={35} duration={45} />
      </View>
    </View>
  );
};

export default DiveListScreen;
