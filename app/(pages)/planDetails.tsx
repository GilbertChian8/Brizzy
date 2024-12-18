import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TimeComponent from "../../components/ActivityTime";
import NotesComponent from "../../components/Notes";

export default function PlanDetails() {
  const router = useRouter();

  const notes = ["Bring cloth", "Bring sunscreen", "Bring Towel", "Bring Cash"];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Header */}
        <Text style={styles.header}>Moreton Island</Text>

        {/* Time and Activities */}
        <View style={styles.activityContainer}>
          {[
            { title: "Kayaking", time: ["08:00", "12:30"] },
            { title: "Snorkeling", time: ["13:30", "14:30"] },
            { title: "Sand Toboggan", time: ["15:00", "17:00"] },
          ].map((activity, index) => (
            <View key={index} style={styles.activity}>
              <TimeComponent startTime={activity.time[0]} endTime={activity.time[1]} />
              <View style={styles.details}>
                <Text style={styles.title}>{activity.title}</Text>
                <Text style={styles.description}>
                  Brisbane to Moreton Island: 4WD, sand dunes, kayaking, snorkeling at Tangalooma.
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Direction</Text>
                </TouchableOpacity>
              </View>
              <Image
                source={{
                  uri: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS8Nvsg7UIChL1qdfvfCFOUmZdLoFz54Rz5fCU-2KU57gsgSooAhNNpqXAFFrKSn0VxmL22wr9IFGikXvzUf6m0wJT_2yxWx7HRo0v3wUE",
                }}
                style={styles.image}
              />
            </View>
          ))}
        </View>

        {/* Notes */}
        <NotesComponent notes={notes} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 20,
  },
  activityContainer: {
    marginTop: 10,
  },
  activity: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
  },
  details: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: "#555",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 132,
    borderRadius: 26,
  },
  button: {
    backgroundColor: "#376BF0",
    paddingVertical: 8,
    paddingHorizontal: 26,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "regular",
  },
});
