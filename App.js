import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Label } from "react-native";
import { useState } from "react";
import Input from "./components/input";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  const [gold, setGold] = useState("");
  const [plat, setPlat] = useState("");
  const [sil, setSil] = useState("");
  const [wax, setWax] = useState("");

  const convertGold = (text) => {
    const setPlatAmount = text * 1.66;
    const setSilAmount = text * 0.9;
    const setWaxAmount = text * 0.071;
    setWax(setWaxAmount === 0 ? "" : setWaxAmount.toFixed(2));
    setPlat(setPlatAmount === 0 ? "" : setPlatAmount.toFixed(2));
    setSil(setSilAmount === 0 ? "" : setSilAmount.toFixed(2));
    setGold(text);
  };

  const convertPlat = (text) => {
    const setGoldAmount = text * 0.6;
    const setSilAmount = text * 0.48;
    const setWaxAmount = text * 0.049;
    setWax(setWaxAmount === 0 ? "" : setWaxAmount.toFixed(2));
    setGold(setGoldAmount === 0 ? "" : setGoldAmount.toFixed(2));
    setSil(setSilAmount === 0 ? "" : setSilAmount.toFixed(2));
    setPlat(text);
  };

  const convertSil = (text) => {
    const setGoldAmount = text * 1.11;
    const setPlatAmount = text * 2.06;
    const setWaxAmount = text * 0.097;
    setWax(setWaxAmount === 0 ? "" : setWaxAmount.toFixed(2));
    setGold(setGoldAmount === 0 ? "" : setGoldAmount.toFixed(2));
    setPlat(setPlatAmount === 0 ? "" : setPlatAmount.toFixed(2));
    setSil(text);
  };

  const convertWax = (text) => {
    const setGoldAmount = text * 14.1;
    const setPlatAmount = text * 20.6;
    const setSilAmount = text * 10.3;
    setGold(setGoldAmount === 0 ? "" : setGoldAmount.toFixed(2));
    setPlat(setPlatAmount === 0 ? "" : setPlatAmount.toFixed(2));
    setSil(setSilAmount === 0 ? "" : setSilAmount.toFixed(2));
    setWax(text);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <Input title="Plat" value={plat} convert={convertPlat} />
        <Input title="Gold" value={gold} convert={convertGold} />
        <Input title="Silver" value={sil} convert={convertSil} />
        <Input title="Wax" value={wax} convert={convertWax} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "38%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    flex: 3,
    display: "grid",
    backgroundColor: "#eee",
    justifyContent: "center",
    padding: 20,
    borderRadius: 20,
  },
  // @ media only screen and (max-width: 600px) {
  //   con
  // }
});
