import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Define the props interface
interface ButtonProps {
  label: string; // Text to display on the button
  onPress: () => void; // Function to call when the button is pressed
  style?: ViewStyle; // Optional custom styles for the button
  textStyle?: TextStyle; // Optional custom styles for the text
  color?: string; // Optional background color
  textColor?: string; // Optional text color
  disabled?: boolean; // Optional disabled state
}

// Button Component
const CustomButton: React.FC<ButtonProps> = ({
  label,
  onPress,
  style,
  textStyle,
  color = '#007AFF', // Default background color (blue)
  textColor = '#FFFFFF', // Default text color (white)
  disabled = false, // Default to not disabled
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        { backgroundColor: disabled ? '#D3D3D3' : color }, // Disable effect
      ]}
      onPress={!disabled ? onPress : undefined} // Disable onPress if button is disabled
      activeOpacity={disabled ? 1 : 0.7} // Change opacity if disabled
    >
      <Text style={[styles.buttonText, textStyle, { color: textColor }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  button: {
    borderRadius: 35, // Rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF', // Default background color
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF', // Default text color
  },
});

export default CustomButton;
