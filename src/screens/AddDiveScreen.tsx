import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LocationOn from '../assets/location_on.svg';
import CustomInput from '../components/CustomInput';
import SelectModal from '../components/SelectModal';

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
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [tankMaterial, setTankMaterial] = useState('steel');

  const onChange = (event, selectedDate) => {
    console.log('event', event);
    console.log('selectedDate', selectedDate);
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    console.log('mode', currentMode);
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleSubmit = () => {
    console.log('--------- Form submitted -----------');
    console.log(depth, duration, weight, tankMaterial, date);
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

      <SafeAreaView>
        <Button onPress={showDatepicker} title="Show date picker!" />
        <Button onPress={showTimepicker} title="Show time picker!" />
        <Text>selected: {date.toLocaleString()}</Text>
      </SafeAreaView>

      <SelectModal options={['aluminum', 'steel']} />

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
