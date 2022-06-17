import React, { useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

export default function Login() {
  const ref_input1 = useRef();
  const ref_input2 = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.contentImage}>
        <Image
          style={styles.banner}
          source={require("../../assets/banner.png")}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Barber Shop</Text>
      </View>
      <KeyboardAvoidingView
        contentContainerStyle={styles.box}
        behavior="position"
        enabled
      >
        <View style={styles.content}>
          <Text style={styles.text}>Login</Text>
          <TextInput
            onSubmitEditing={() => ref_input2.current.focus()}
            ref={ref_input1}
            returnKeyType={"next"}
            autoFocus={true}
            style={styles.input}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Senha</Text>
          <TextInput
            ref={ref_input2}
            autoFocus={true}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
          <Button title="Entrar" color="#6c757d" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6c757d",
  },
  content: {
    marginTop: 10,
    alignItems: "center",
  },
  contentImage: {
    marginTop: 60,
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 60,
    color: "#fff",
    fontFamily: "Bayon_400Regular",
  },
  input: {
    backgroundColor: "#fff",
    width: "80%",
    height: 50,
    textAlign: "center",
    fontSize: 25,
    borderRadius: 10,
  },
  text: {
    color: "#e9ecef",
    fontFamily: "Roboto_300Light",
    fontSize: 25,
  },
  button: {
    marginTop: 10,
    width: "50%",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
  },
});
