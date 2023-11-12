import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Calendar from '../assets/calendar.svg';
import Clock from '../assets/clock.svg';
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
  picker: {
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    margin: 7,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = currentMode => {
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

  const getFormattedDate = () => {
    return new Intl.DateTimeFormat('fr-FR').format(date);
  };

  const getFormattedTime = () => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
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
        <View style={styles.row}>
          <TouchableOpacity onPress={showDatepicker} style={styles.picker}>
            <Calendar width={25} />
            <Text>{getFormattedDate()}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showTimepicker} style={styles.picker}>
            <Clock width={25} />
            <Text>{getFormattedTime()}</Text>
          </TouchableOpacity>

          {/* <Button onPress={showDatepicker} title="Show date picker!" />
          <Button onPress={showTimepicker} title="Show time picker!" />
          <Text>selected: {date.toLocaleString()}</Text> */}
        </View>
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
