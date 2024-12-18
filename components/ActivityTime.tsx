import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ActivityTimeProps {
  startTime: string;
  endTime: string;
}

const ActivityTime: React.FC<ActivityTimeProps> = ({ startTime, endTime }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{startTime}</Text>
      <View style={styles.line} />
      <Text style={styles.time}>{endTime}</Text>
    </View>
  );
};

export default ActivityTime;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 8,
  },
  time: {
    fontSize: 18,
    color: "#376BF0",
    fontWeight: "regular",
  },
  line: {
    height: 40,
    width: 1,
    backgroundColor: "#376BF0",
    marginVertical: 4,
  },
});
