import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

import GameScreen from "./screens/GameScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  function pickedNumberHandler(numberPicked) {
    setPickedNumber(numberPicked);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (pickedNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15,
  },
});
