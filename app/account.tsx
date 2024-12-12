import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Image,} from "react-native";

import { Link, useRouter } from "expo-router";
import CustomButton from "../components/CustomButton"; 
import ProfilePicture from '../components/ProfilePicture';
import MenuBar from "../components/MenuBar";

export default function Account() {

    const router = useRouter();

    const handleClick = () => {
        console.log("Welcome");
        router.push("/setting");
    };
    

    return (
        <View style={styles.base}>
            <View style={styles.container}>
                <ProfilePicture/>
                <Text style={styles.username}>Sarah Smith</Text>
            </View>
            <View style={styles.wrapper}>
                <CustomButton onPress={() => router.push("/editaccount")} label="Edit Account Detail" color="#ffffff" textColor="#000000" style={styles.button} />
                <CustomButton onPress={() => router.push("/main")} label="Help Center" color="#ffffff" textColor="#000000" style={styles.button} />
                <CustomButton onPress={() => router.push("/setting")} label="Settings" color="#ffffff" textColor="#000000" style={styles.button} />
                <CustomButton onPress={() => router.push("/")} label="Log Out" color="#ffffff" textColor="#000000" style={styles.button} />
                <Text style={styles.version}>Version ****</Text>
                <MenuBar/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    base:{
        flex: 1,
        backgroundColor: '#376BF0',
    },
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#376BF0',
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderColor:'#000000',
        borderTopLeftRadius:50 ,
        borderTopRightRadius:50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    username: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 16,
        color: "#fff"
    },
    version: {
        marginVertical:20
    },
    button: {
        width: "90%",
        height: 50,
        borderColor: '#000000',
        borderWidth: 2,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});
  
