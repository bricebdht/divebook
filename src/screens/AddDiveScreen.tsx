import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import LocationOn from '../assets/location_on.svg';
import CustomInput from '../components/CustomInput';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {color: 'black'},
  input: {
    margin: 7,
    flex: 1,
  },
});

const AddDiveScreen = () => {
  const [depth, setDepth] = useState('');
  const [duration, setDuration] = useState('');
  const [weight, setWeight] = useState('');
  const [temperature, setTemperature] = useState('');

  const [tankMaterial, setTankMaterial] = useState('steel');

  const handleSubmit = () => {
    console.log('--------- Form submitted -----------');
    console.log(depth, duration, weight, tankMaterial);
  };

  return (
    <View>
      <View style={styles.row}>
        <CustomInput
          placeholder="Site"
          icon={<LocationOn width={25} />}
          externalStyle={styles.input}
        />
      </View>

      <View style={styles.row}>
        <CustomInput
          placeholder="Depth"
          suffix="m"
          keyboardType="numeric"
          onInputChange={text => setDepth(text)}
          externalStyle={styles.input}
        />

        <CustomInput
          placeholder="Duration"
          suffix="min"
          keyboardType="numeric"
          onInputChange={text => setDuration(text)}
          externalStyle={styles.input}
        />
      </View>

      <View style={styles.row}>
        <CustomInput
          placeholder="Temperature"
          suffix="°C"
          keyboardType="numeric"
          onInputChange={text => setTemperature(text)}
          externalStyle={styles.input}
        />
        <CustomInput
          placeholder="Weight"
          suffix="kg"
          keyboardType="numeric"
          onInputChange={text => setWeight(text)}
          externalStyle={styles.input}
        />
      </View>

      {/* <CustomInput
        placeholder="Weight"
        suffix="kg"
        keyboardType="numeric"
        onInputChange={text => setWeight(text)}
      />
      <CustomInput placeholder="Test" />
      <CustomInput placeholder="Site" icon={<LocationOn width={25} />} /> */}

      {/* <View>
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
      </View> */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default AddDiveScreen;
