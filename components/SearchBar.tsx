import React from 'react';
import { View, TextInput, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  placeholder?: string; // Placeholder text for the input
  value: string; // Current value of the search bar
  onChangeText: (text: string) => void; // Callback for text changes
  onClear?: () => void; // Callback for clearing the input
  containerStyle?: ViewStyle; // Custom styles for the container
  inputStyle?: TextStyle; // Custom styles for the input
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  value,
  onChangeText,
  onClear,
  containerStyle,
  inputStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor="#A9A9A9"
        value={value}
        onChangeText={onChangeText}
      />
      <Ionicons
        name="search"
        size={20}
        color="#376BF0" // Blue color for the icon
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 48,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: 'rgba(0, 0, 0, 0.2)', // Slightly darker black
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4, // Medium blur
    shadowOpacity: 1,
    elevation: 4, // Android
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    marginLeft: 8,
  },
});


export default SearchBar;
