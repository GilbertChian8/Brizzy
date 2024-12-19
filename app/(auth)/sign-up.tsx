import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Image,} from "react-native";
import CustomButton from "../../components/CustomButton"; 
import { Link } from "expo-router";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    console.log("Sign Up button pressed");
    console.log({ username, email, password });
    // Add sign-up API logic here
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Sign Up</Text>

      {/* Username Input with Label */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#A9A9A9"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Email Input with Label */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#A9A9A9"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input with Label */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Confirm Password Input with Label */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Sign Up Button */}
      <CustomButton
        label="Sign Up"
        onPress={handleSignUp}
        style={styles.signUpButton}
      />

      {/* OR Divider */}
      <Text style={styles.orText}>Or</Text>

      {/* Social Media Login Options */}
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require("../../assets/icons/google.png")} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/icons/facebook.png")} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/icons/apple.png")} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      {/* Link to Login */}
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Link href="/" style={styles.loginLink}>
            Login here
        </Link>
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 5,
    marginLeft: 15,
  },
  input: {
    width: "90%",
    height: 44,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 1.0)",
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  signUpButton: {
    width: "90%",
    height: 44,
    borderRadius: 35,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 12,
    color: "#A9A9A9",
    marginTop: 20,
  },
  orText: {
    marginVertical: 10,
    color: "#000000",
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 150,
    marginBottom: 20,
  },
  socialIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  loginLink: {
    fontSize: 12,
    color: "#007AFF",
    fontWeight: "bold",
  },
});
