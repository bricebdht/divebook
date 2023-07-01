import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DiveScreen from "../screens/DiveScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SiteScreen from "../screens/SiteScreen";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dive" component={DiveScreen} />
      <Stack.Screen name="Site" component={SiteScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
