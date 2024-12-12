import React, { useState } from "react";
import {View, Text, TextInput, Switch, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity} from "react-native";
import CustomButton from "../components/CustomButton"; 
import { Link, useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

const Setting: React.FC = () => {
  const [isNotificationEnabled, setNotificationEnabled] = useState(true);
  const [isLocationEnabled, setLocationEnabled] = useState(true);

  const toggleNotificationSwitch = () => setNotificationEnabled((prev) => !prev);
  const toggleLocationSwitch = () => setLocationEnabled((prev) => !prev);

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity>
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
          trackColor={{ false: '#fff', true: '#000' }}
          thumbColor={isNotificationEnabled ? '#fff' : '#000'}
          onValueChange={toggleNotificationSwitch}
          value={isNotificationEnabled}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Location</Text>
        <Switch
          trackColor={{ false: '#fff', true: '#000' }}
          thumbColor={isLocationEnabled ? '#fff' : '#000'}
          onValueChange={toggleLocationSwitch}
          value={isLocationEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
    alignSelf: "center"
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
    elevation: 1, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  settingLabel: {
    fontSize: 16,
    color: '#000',
  },
  settingValue: {
    fontSize: 16,
    color: '#555',
  },
});

export default Setting;