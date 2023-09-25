import { Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  title: {
    fontSize: deviceWidth <= 320 ? 20 : 24,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "90%",
    width: 300,
  },
});
