import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface Activity {
  place: string;
  placeDescription: string;
  startTime: string;
  endTime: string;
  mapLink: string;
}

const CreatePlan = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [activities, setActivities] = useState<Activity[]>([
    { place: "", placeDescription: "", startTime: "", endTime: "", mapLink: "" },
  ]);

  const router = useRouter();

  const addMoreActivity = () => {
    setActivities([
      ...activities,
      { place: "", placeDescription: "", startTime: "", endTime: "", mapLink: "" },
    ]);
  };

  const updateActivity = (index: number, field: keyof Activity, value: string) => {
    const updatedActivities = activities.map((activity, i) =>
      i === index ? { ...activity, [field]: value } : activity
    );
    setActivities(updatedActivities);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.header}>Create</Text>

        {/* Input Fields */}
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.multiInput]}
            placeholder="Enter description"
            value={description}
            multiline
            onChangeText={setDescription}
          />
        </View>

        {/* Dynamic Activity Sections */}
        {activities.map((activity, index) => (
          <View key={index} style={styles.activitySection}>
            <Text style={styles.label}>Activity {index + 1}:</Text>

            <Text style={styles.labelSmall}>Place</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter place"
              value={activity.place}
              onChangeText={(value) => updateActivity(index, "place", value)}
            />

            <Text style={styles.labelSmall}>Place Description</Text>
            <TextInput
              style={[styles.input, styles.multiInput]}
              placeholder="Enter place description"
              value={activity.placeDescription}
              multiline
              onChangeText={(value) =>
                updateActivity(index, "placeDescription", value)
              }
            />

            <Text style={styles.labelSmall}>Time</Text>
            <View style={styles.timeContainer}>
              <TextInput
                style={styles.timeInput}
                placeholder="Start"
                value={activity.startTime}
                onChangeText={(value) => updateActivity(index, "startTime", value)}
              />
              <Text style={styles.until}>Until</Text>
              <TextInput
                style={styles.timeInput}
                placeholder="End"
                value={activity.endTime}
                onChangeText={(value) => updateActivity(index, "endTime", value)}
              />
            </View>

            <Text style={styles.labelSmall}>Map Link</Text>
            <TextInput
              style={styles.input}
              placeholder="Paste map link"
              value={activity.mapLink}
              onChangeText={(value) => updateActivity(index, "mapLink", value)}
            />
          </View>
        ))}

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.addButton]}
            onPress={addMoreActivity}
          >
            <Text style={styles.buttonText}>Add More Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.doneButton]}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePlan;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  labelSmall: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  multiInput: {
    height: 80,
    textAlignVertical: "top",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  timeInput: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 12,
    padding: 10,
    flex: 1,
  },
  until: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 35,
  },
  addButton: {
    backgroundColor: "#F8B84E",
  },
  doneButton: {
    backgroundColor: "#376BF0",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  activitySection: {
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
});
