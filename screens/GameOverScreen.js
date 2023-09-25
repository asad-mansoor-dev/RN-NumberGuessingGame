import { Image, View, StyleSheet, Text, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ totalRounds, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootView}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summmaryText}>
        Your Phone needed <Text style={styles.highlight}>{totalRounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const screenWidth = Dimensions.get("window").width;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  imageContainer: {
    height: screenWidth < 380 ? 150 : 300,
    width: screenWidth < 380 ? 150 : 300,
    borderRadius: screenWidth < 380 ? 75 : 150,
    borderColor: Colors.primary800,
    borderWidth: 4,
    overflow: "hidden",
    margin: deviceWidth <= 320 ? 20 : 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summmaryText: {
    fontFamily: "open-sans",
    fontSize: deviceWidth <= 320 ? 18 : 24,
    marginBottom: 24,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary800,
  },
});
