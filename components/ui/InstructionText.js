import { Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}

export default InstructionText;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  instruction: {
    color: Colors.accent500,
    fontSize: deviceWidth <= 320 ? 20 : 24,
    fontFamily: "open-sans",
  },
});
