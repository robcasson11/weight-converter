import { StyleSheet, View, Text } from "react-native-web";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "blue",
  },
});

export default Footer;
