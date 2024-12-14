import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function EditAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [previousPassword, setPreviousPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleEdit = () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    console.log("Save button pressed");
    console.log({ username, email, password });
    // Add save logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Account Detail</Text>

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

        {/* Previous Password Input with Label */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Previous Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your previous password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry
            value={previousPassword}
            onChangeText={setPreviousPassword}
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

        {/* Save Button */}
        <CustomButton
          label="Save"
          onPress={handleEdit}
          style={styles.saveButton}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Set the background to match your app
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 50, // Adjust for the back button
    alignSelf: "center",
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
  saveButton: {
    width: "90%",
    height: 44,
    borderRadius: 35,
    marginTop: 15,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
