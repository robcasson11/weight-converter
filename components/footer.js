import { StyleSheet, View, Text } from "react-native-web";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>By Rob</Text>
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
    fontFamily: "Bricolage Grotesque",
    color: "grey",
  },
});

export default Footer;
