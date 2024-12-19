import { View, Text ,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton'

const blank = () => {
  return (
    <View>
      <Text style={styles.container}>blank</Text>

      <CustomButton label="Low-High" onPress={() => {}} style={styles.smallButton} color="#fff" textColor="#007AFF" textStyle={styles.smallButtonText} />
      <CustomButton label="Filter" onPress={() => {}} style={styles.smallButton} textStyle={styles.smallButtonText} />
    </View>
  )
}

export default blank

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center", 
  },
  cardWrapper: {
    width: "90%", 
    marginBottom: 1, 
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