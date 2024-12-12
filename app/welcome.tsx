import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Image,} from "react-native";
import CustomButton from "../components/CustomButton"; 
import { Link, useRouter } from "expo-router";

export default function Welcome() {

    const router = useRouter();

    const handleClick = () => {
        console.log("Welcome");
        router.push("/main");
    };
    return (
        
      <View style={styles.container}>
        <View style={styles.wrapper}>
            <Text style={styles.title}>Hi,</Text>
            <Text style={styles.title}>When do you plan to come out?</Text>
            <CustomButton onPress={handleClick} label="Day Time" color="#FFFFFF" textColor="#000000" style={styles.dayButton} />
            <CustomButton onPress={handleClick} label="Night Time" color="#FFFFFF"  textColor="#000000" style={styles.nightButton} />
            <CustomButton onPress={handleClick} label="Both" color="#FFFFFF" textColor="#000000" style={styles.bothButton} />
        </View>
      </View>
    );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  wrapper:{
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    textAlign:"center",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "", // Use your custom font if loaded
  },
  dayButton: {
    width: "90%",
    height: 50,
    borderRadius: 35,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  nightButton: {
    width: "90%",
    height: 50,
    borderRadius: 35,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  bothButton: {
    width: "90%",
    height: 50,
    borderColor: 'black',
    borderRadius: 35,
    borderWidth: 2,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
});
