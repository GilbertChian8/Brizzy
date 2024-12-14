import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import PlanCard from "../../components/PlanCard";

export default function MyPlan() {
  const router = useRouter();

  const planData = [
    {
      id: "1",
      title: "Moreton Island",
      imageUri:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS8Nvsg7UIChL1qdfvfCFOUmZdLoFz54Rz5fCU-2KU57gsgSooAhNNpqXAFFrKSn0VxmL22wr9IFGikXvzUf6m0wJT_2yxWx7HRo0v3wUE",
      labels: [
        { text: "Individual", color: "#FF5733" },
        { text: "Day Time", color: "#007BFF" },
      ],
      rating: 4.8,
      reviewCount: 2500,
      description:
        "Brisbane to Moreton Island: 4WD, sand dunes, kayaking, snorkeling at Tangalooma.",
      cost: "300",
    },
    {
      id: "2",
      title: "Moreton Island",
      imageUri:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS8Nvsg7UIChL1qdfvfCFOUmZdLoFz54Rz5fCU-2KU57gsgSooAhNNpqXAFFrKSn0VxmL22wr9IFGikXvzUf6m0wJT_2yxWx7HRo0v3wUE",
      labels: [
        { text: "Individual", color: "#FF5733" },
        { text: "Day Time", color: "#007BFF" },
      ],
      rating: 4.8,
      reviewCount: 2500,
      description:
        "Brisbane to Moreton Island: 4WD, sand dunes, kayaking, snorkeling at Tangalooma.",
      cost: "300",
    },
    {
      id: "3",
      title: "Moreton Island",
      imageUri:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS8Nvsg7UIChL1qdfvfCFOUmZdLoFz54Rz5fCU-2KU57gsgSooAhNNpqXAFFrKSn0VxmL22wr9IFGikXvzUf6m0wJT_2yxWx7HRo0v3wUE",
      labels: [
        { text: "Individual", color: "#FF5733" },
        { text: "Day Time", color: "#007BFF" },
      ],
      rating: 4.8,
      reviewCount: 2500,
      description:
        "Brisbane to Moreton Island: 4WD, sand dunes, kayaking, snorkeling at Tangalooma.",
      cost: "300",
    },
    {
      id: "4",
      title: "Moreton Island",
      imageUri:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS8Nvsg7UIChL1qdfvfCFOUmZdLoFz54Rz5fCU-2KU57gsgSooAhNNpqXAFFrKSn0VxmL22wr9IFGikXvzUf6m0wJT_2yxWx7HRo0v3wUE",
      labels: [
        { text: "Individual", color: "#FF5733" },
        { text: "Day Time", color: "#007BFF" },
      ],
      rating: 4.8,
      reviewCount: 2500,
      description:
        "Brisbane to Moreton Island: 4WD, sand dunes, kayaking, snorkeling at Tangalooma.",
      cost: "300",
    },
    {
      id: "5",
      title: "Moreton Island",
      imageUri:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS8Nvsg7UIChL1qdfvfCFOUmZdLoFz54Rz5fCU-2KU57gsgSooAhNNpqXAFFrKSn0VxmL22wr9IFGikXvzUf6m0wJT_2yxWx7HRo0v3wUE",
      labels: [
        { text: "Individual", color: "#FF5733" },
        { text: "Day Time", color: "#007BFF" },
      ],
      rating: 4.8,
      reviewCount: 2500,
      description:
        "Brisbane to Moreton Island: 4WD, sand dunes, kayaking, snorkeling at Tangalooma.",
      cost: "300",
    },
    // Add additional items...
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={planData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <PlanCard
                title={item.title}
                imageUri={item.imageUri}
                labels={item.labels}
                rating={item.rating}
                reviewCount={item.reviewCount}
                description={item.description}
                cost={item.cost}
              />
            </View>
          )}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <Text style={styles.title}>My Plan</Text>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 30,
    alignSelf: "center",
  },
  flatListContent: {
    paddingBottom: 20,
    alignItems: "center", 
  },
  cardWrapper: {
    width: "90%", 
    marginBottom: 1,
  },
});
