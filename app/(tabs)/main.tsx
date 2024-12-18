import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import SearchBar from "../../components/SearchBar";
import PlanCard from "../../components/PlanCard";
import CustomButton from "@/components/CustomButton";

export default function Main() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text: string) => {
    setSearchText(text);
    console.log("Searching for:", text);
  };

  const handleClear = () => {
    setSearchText("");
    console.log("Search cleared");
  };

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
    
    // Additional items...
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <SearchBar
          value={searchText}
          onChangeText={handleSearch}
          onClear={handleClear}
          placeholder="Search"
          containerStyle={styles.searchBar}
        />
        <View style={styles.buttonGroup}>
            <CustomButton label="Individual" onPress={() => {}} style={styles.smallButton} color="#fff" textColor="#007AFF" textStyle={styles.smallButtonText} />
            <CustomButton label="Group" onPress={() => {}} style={styles.smallButton} color="#fff" textColor="#007AFF"  textStyle={styles.smallButtonText} />
            <CustomButton label="Low-High" onPress={() => {}} style={styles.smallButton} color="#fff" textColor="#007AFF" textStyle={styles.smallButtonText} />
            <CustomButton label="Filter" onPress={() => {}} style={styles.smallButton} textStyle={styles.smallButtonText} />
        </View>
        <FlatList
          data={planData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push({ pathname: "/planDetails", params: { id: item.id } })}
            >
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
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
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
  searchBar: {
    alignSelf:'center',
    width: "100%"
  },
  flatListContent: {
    paddingBottom: 20,
    alignItems: "center", // Center items horizontally
  },
  cardWrapper: {
    width: "90%", // Ensures cards don't stretch too wide
    marginBottom: 1, // Spacing between cards
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  smallButton: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#007AFF",
    marginHorizontal: 5,
    fontWeight: "regular",
    marginVertical: 10,
  },
  smallButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "medium",
  },
});