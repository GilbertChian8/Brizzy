import React, { useEffect } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import CustomButton from "../components/CustomButton"; // Ensure the path is correct
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  const router = useRouter();

  useEffect(() => {
    // Navigate to the login page after 2 seconds
    const timer = setTimeout(() => {
      router.push("/sign-in");
    }, 2000);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/Brizzy White Logo.png")} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>Your Brisbane Buddy</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#376BF0",
    padding: 20,
  },
  logo: {
    width: 150, 
    height: 60,
    alignSelf:"center",
  },
  text: {
    color: "#fff",
    alignSelf:"center"
  }
  
});
