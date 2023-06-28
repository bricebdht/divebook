import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

const PlaceholderImage = require("./assets/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage}></ImageViewer>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo"></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});