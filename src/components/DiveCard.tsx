import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FranceFlag from '../assets/flags/fr.svg';
import {globalStyles} from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: globalStyles.borderColor,
    borderWidth: 1,
    margin: 10,
    paddingVertical: 10,
  },
  dataContainer: {
    flexDirection: 'column',
  },
  icon: {width: 30, height: 15, borderRadius: 60},
  importantText: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    color: globalStyles.fontColor,
  },
  simpleText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: globalStyles.fontColor,
  },
});

const DiveCard: React.FC<{depth: number; duration: number}> = ({
  depth,
  duration,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.importantText}>{depth}m</Text>
        <Text style={styles.simpleText}>{duration} min</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.importantText}>Cap Caveaux</Text>
        <Text style={styles.simpleText}>14:46</Text>
      </View>
      <View>
        <FranceFlag
          width={styles.icon.width}
          borderRadius={styles.icon.borderRadius}
        />
      </View>
    </View>
  );
};

export default DiveCard;
