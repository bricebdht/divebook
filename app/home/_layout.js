import { Slot } from "expo-router";
import { Text } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </>
  );
}
