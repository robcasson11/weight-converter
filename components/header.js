import { StyleSheet, View, Text } from "react-native-web";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Use this tool to compare the weights of precious metal items.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "Bricolage Grotesque",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "grey",
  },
});

export default Header;
