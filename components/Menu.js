import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, View } from "react-native";

const Menu = () => {
  const navigation = useNavigation();

  const handleNavigateToDive = () => {
    navigation.navigate("Dive");
  };

  const handleNavigateToSite = () => {
    navigation.navigate("Sites");
  };

  const handleNavigateToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View>
      <Button title="Page Dive" onPress={handleNavigateToDive} />
      <Button title="Page Site" onPress={handleNavigateToSite} />
      <Button title="Page Profil" onPress={handleNavigateToProfile} />
    </View>
  );
};

export default Menu;
