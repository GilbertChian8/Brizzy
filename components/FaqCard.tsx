import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface FaqCardProps {
  title: string;
  description: string;
  backgroundColor: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ title, description, backgroundColor }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 140,
    height: 180,
    marginRight: 10, // Spacing between cards
    justifyContent: "center",
    alignItems: "flex-start", 
    padding: 15,
    paddingVertical: "10%",
    borderRadius: 28,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
    textAlign: "left",
  },
  description: {
    fontSize: 12,
    color: "#fff",
    textAlign: "left",
  },
});

export default FaqCard;
