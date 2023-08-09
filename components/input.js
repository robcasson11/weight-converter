import { StyleSheet, TextInput, Text } from "react-native-web";

const Input = ({ title, value, convert }) => {
  return (
    <>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => convert(text)}
      ></TextInput>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
  input: {
    marginBottom: 10,
    height: 30,
    borderWidth: 2,
    borderRadius: 4,
    padding: 2,
  },
});

export default Input;
