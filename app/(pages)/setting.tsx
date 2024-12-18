import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Import SafeAreaView
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Setting: React.FC = () => {
  const router = useRouter(); 
  const [isNotificationEnabled, setNotificationEnabled] = useState(true);
  const [isLocationEnabled, setLocationEnabled] = useState(true);

  const toggleNotificationSwitch = () => setNotificationEnabled((prev) => !prev);
  const toggleLocationSwitch = () => setLocationEnabled((prev) => !prev);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push("/account")}> 
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        {/* Setting Items */}
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Language</Text>
          <Text style={styles.settingValue}>English</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notification</Text>
          <Switch
            trackColor={{ false: "#fff", true: "#000" }}
            thumbColor={isNotificationEnabled ? "#fff" : "#000"}
            onValueChange={toggleNotificationSwitch}
            value={isNotificationEnabled}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Location</Text>
          <Switch
            trackColor={{ false: "#fff", true: "#000" }}
            thumbColor={isLocationEnabled ? "#fff" : "#000"}
            onValueChange={toggleLocationSwitch}
            value={isLocationEnabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // Ensures the background color matches
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
    alignSelf: "center",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
    elevation: 1, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  settingLabel: {
    fontSize: 16,
    color: "#000",
  },
  settingValue: {
    fontSize: 16,
    color: "#555",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 10,
    width: 40, 
    height: 40, 
    borderRadius: 20,
    borderWidth: 1, 
    borderColor: "#000000", 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#FFFFFF", 
    // elevation: 3, 
    // shadowColor: "#000", 
    // shadowOffset: { width: 0, height: 2 }, 
    // shadowOpacity: 0.3, 
    // shadowRadius: 3, 
  },
});

export default Setting;
