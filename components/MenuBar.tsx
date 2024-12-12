import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBookmark, faPlus, faBookOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'expo-router';

interface MenuBarProps {
  // Props for handling navigation or actions for each item.
}

const MenuBar: React.FC<MenuBarProps> = () => {

    const router = useRouter();

    const navigateToAccount = () => {
        router.push('/account'); // Navigate to the account page
    };
    
    return (
        <View style={styles.menuBar}>
        <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faHome} size={20} color="#376BF0" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faBookmark} size={20} color="#376BF0" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faPlus} size={20} color="#376BF0" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faBookOpen} size={20} color="#376BF0" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={navigateToAccount}>
            <FontAwesomeIcon icon={faUser} size={20} color="#376BF0" />
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  menuBar: {
    width:"90%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // For Android
  },
  menuItem: {
    padding: 10,
  },
});

export default MenuBar;