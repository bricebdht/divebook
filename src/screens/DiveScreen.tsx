import React, {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';

const DiveScreen = () => {
  const [depth, setDepth] = useState('');
  const [duration, setDuration] = useState('');
  const [tankMaterial, setTankMaterial] = useState('steel');

  const handleSubmit = () => {
    console.log('--------- Form submitted -----------');
    console.log(depth, duration, tankMaterial);
  };

  return (
    <View>
      <Text>Page d'ajout de plongées</Text>
      <TextInput
        placeholder="Depth"
        value={depth}
        onChangeText={text => setDepth(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Duration"
        value={duration}
        onChangeText={text => setDuration(text)}
        keyboardType="numeric"
      />
      <View>
        <TouchableOpacity
          onPress={() => {
            setTankMaterial('aluminum');
          }}>
          <Text>Aluminum</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTankMaterial('steel');
          }}>
          <Text>Steel</Text>
        </TouchableOpacity>
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default DiveScreen;
