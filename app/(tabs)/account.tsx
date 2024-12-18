import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Image,} from "react-native";

import { Link, useRouter } from "expo-router";
import CustomButton from "../../components/CustomButton"; 
import ProfilePicture from '../../components/ProfilePicture';

export default function Account() {

    const router = useRouter();

    const handleClick = () => {
        console.log("Welcome");
        router.push("/setting");
    };
    

    return (
        <View style={styles.base}>
            <View style={styles.container}>
                <View style={styles.profile}>
                    <ProfilePicture/>
                    <Text style={styles.username}>Gilbert Hensem</Text>
                </View>
            </View>
            <View style={styles.wrapper}>
                <CustomButton onPress={() => router.push("/editAccount")} label="Edit Account Detail" color="#ffffff" textColor="#000000" style={styles.button} textStyle={{ alignSelf: 'flex-start' }} />
                <CustomButton onPress={() => router.push("/helpCenter")} label="Help Center" color="#ffffff" textColor="#000000" style={styles.button} textStyle={{ alignSelf: 'flex-start' }}/>
                <CustomButton onPress={() => router.push("/setting")} label="Settings" color="#ffffff" textColor="#000000" style={styles.button} textStyle={{ alignSelf: 'flex-start' }}/>
                <CustomButton onPress={() => router.push("/")} label="Log Out" color="#ffffff" textColor="#000000" style={styles.button} textStyle={{ alignSelf: 'flex-start' }}/>
                <Text style={styles.version}>Version ****</Text>
                
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
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    profile: {
        alignItems: 'center',
        paddingTop: 10,
    },
    wrapper: {
        flex: 0.65,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 40,
        alignItems: 'center',
        gap: 15, // Add spacing between children
    },
    button: {
        width: "90%",
        height: 50,
        borderColor: '#000000',
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    username: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        color: "#fff"
    },
    version: {
        marginVertical:20
    },
});
  
