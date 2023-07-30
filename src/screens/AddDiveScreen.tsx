import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  text: {color: 'black'},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 10,
  },
});

const AddDiveScreen = () => {
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
        style={styles.input}
        placeholder="Depth"
        placeholderTextColor="grey"
        value={depth}
        onChangeText={text => setDepth(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Duration"
        placeholderTextColor="grey"
        value={duration}
        onChangeText={text => setDuration(text)}
        keyboardType="numeric"
      />
      <View>
        <TouchableOpacity
          onPress={() => {
            setTankMaterial('aluminum');
          }}>
          <Text style={styles.text}>Aluminum</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTankMaterial('steel');
          }}>
          <Text style={styles.text}>Steel</Text>
        </TouchableOpacity>
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default AddDiveScreen;
