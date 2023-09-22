import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    padding: deviceWidth < 280 ? 12 : 24,
    margin: deviceWidth < 280 ? 12 : 24,
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 280 ? 28 : 36,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    justifyContent: "center",
  },
});
