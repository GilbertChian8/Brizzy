import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface NotesProps {
  notes: string[];
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notes:</Text>
      {notes.map((note, index) => (
        <Text key={index} style={styles.note}>
          • {note}
        </Text>
      ))}
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#CDDBFE",
    opacity: 10,
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 4 }, // Shadow position
    shadowOpacity: 0.1, // Adjust shadow transparency
    shadowRadius: 8, // Spread of shadow
    elevation: 6, // For Android shadow
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  note: {
    fontSize: 14,
    marginVertical: 2,
    
  },
});
