import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import DatabaseService from "../services/DatabaseService";

const DiveScreen = () => {
  const [depth, setDepth] = useState("");
  const [duration, setDuration] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weight, setWeight] = useState("");
  const [wetsuitThickness, setWetsuitThickness] = useState("");
  const [tankVolume, setTankVolume] = useState("");
  const [tankMaterial, setTankMaterial] = useState("steel");

  const handleSubmit = () => {
    console.log("Form submitted");
    console.log(
      depth,
      temperature,
      weight,
      wetsuitThickness,
      tankVolume,
      tankMaterial
    );
    DatabaseService.createTables();
    DatabaseService.addDive(
      depth,
      temperature,
      weight,
      wetsuitThickness,
      tankVolume,
      tankMaterial
    );
    DatabaseService.getDives();
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Page d'ajout de plongées</Text>
      <TextInput
        placeholder="Depth"
        value={depth}
        onChangeText={(text) => setDepth(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Duration"
        value={duration}
        onChangeText={(text) => setDuration(text)}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        placeholder="Water temperature"
        value={temperature}
        onChangeText={(text) => setTemperature(text)}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        placeholder="Weight"
        value={weight}
        onChangeText={(text) => setWeight(text)}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        placeholder="Wetsuit thickness"
        value={wetsuitThickness}
        onChangeText={(text) => setWetsuitThickness(text)}
        keyboardType="numeric"
      ></TextInput>
      <TextInput
        placeholder="Tank volume"
        value={tankVolume}
        onChangeText={(text) => setTankVolume(text)}
        keyboardType="numeric"
      ></TextInput>
      <Picker
        selectedValue={tankMaterial}
        onValueChange={(value) => setTankMaterial(value)}
      >
        <Picker.Item label="Steel" value="steel" />
        <Picker.Item label="Aluminum" value="aluminum" />
      </Picker>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default DiveScreen;
