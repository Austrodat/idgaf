import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { Divider } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Login</Text>
        <Text style={[styles.textTitles, { marginTop: 50, marginBottom: 16}]}>
          Hello Welcome Back</Text>
        <Text style={[styles.textDesc, {opacity: 0.4, width: 140, height: 32,}]}>
          Welcome back please sign in again</Text>
      </View>
      <View style={styles.loginForm}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 16, color: "#12325E", fontWeight: "700"}}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{alignItems: "center"}}>
	        <Divider/>
	        <Text style={styles.textDesc}>Or</Text>
	        <Divider/>
        </View>
        <TouchableOpacity style={styles.buttonOtherLogin}><Text style={{ fontSize: 14, color: "#fff", fontWeight: "500"}}>
            Facebook
          </Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonOtherLogin}><Text style={{ fontSize: 14, color: "#fff", fontWeight: "500"}}>
          Gmail
        </Text></TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.textDesc, {opacity: 0.4, height: 32,}]}>
        Already have an account?</Text>
        <TouchableOpacity style={styles.linkbutton}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00224f",
    color: "#fff",
    flex: 1,
    gap: 60,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  textTitles: {
    fontSize: 26,
    fontWeight: "600",
    color: "#fff",
  },
  textDesc: {
    fontSize: 14,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  input: {
    height:37,
    color: "#fff",
    borderBottomColor: "#417ac6",
    borderBottomWidth: 1,
    width: 287,
  },
  button: {
    width: 287,
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOtherLogin: {
    width: 327,
    height: 48,
    backgroundColor: "#11325C",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    
  },
  linkbutton: {

  }
});
