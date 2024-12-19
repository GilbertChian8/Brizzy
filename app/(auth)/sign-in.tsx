import React from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import CustomButton from "../../components/CustomButton"; // Ensure the path is correct
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
    
    const router = useRouter();

    const handleLogin = () => {
        console.log("Login button pressed");
        router.push("/welcome");
    };
    return (
        <SafeAreaView style={styles.base}>
            <View style={styles.container}>
                {/* Logo */}
                <Image
                    source={require("../../assets/images/Brizzy.png")} 
                    style={styles.logo}
                    resizeMode="contain"
                />

                {/* Username Label and Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Username</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    placeholderTextColor="#A9A9A9"
                    />
                </View>

                {/* Password Label and Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry
                    />
                </View>

                {/* Login Button */}
                <CustomButton label="Login" onPress={handleLogin} style={styles.loginButton} />

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

                {/* Sign-Up Link */}
                <Text style={styles.signUpText}>
                    Don't have an account?{" "}
                    <Link href="/sign-up" style={styles.signUpLink}>
                    Sign up here
                    </Link>
                </Text>
                </View>
        </SafeAreaView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    base:{
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 20,
    },
    logo: {
        width: 150, 
        height: 60,
        marginBottom: 30, 
    },
    inputContainer: {
        width: "100%",
        maxWidth: 223,
        marginBottom: 15, 
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000000",
        marginBottom: 5,
    },
    input: {
        width: "100%",
        height: 44,
        borderRadius: 35,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: "rgba(0, 0, 0, 1.0)",
    },
    loginButton: {
        width: 223,
        height: 44,
        borderRadius: 35,
        backgroundColor: "#376BF0",
        justifyContent: "center",
        alignItems: "center",
        
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
    signUpText: {
        color: "#A9A9A9",
        fontSize: 12,
        textAlign: "center",
    },
    signUpLink: {
        color: "#007AFF",
        fontWeight: "bold",
        fontSize: 12,
    },
});
