import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Image, ScrollView,} from "react-native";
import { Link, useRouter } from "expo-router";
import CustomButton from "../components/CustomButton"; 
import SearchBar from '../components/SearchBar';
import MenuBar from '../components/MenuBar';
import ProfilePicture from '../components/ProfilePicture';
import PlanCard from '../components/PlanCard';

export default function Main() {

    const router = useRouter();
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text: string) => {
        setSearchText(text);
        console.log('Searching for:', text);
    };

    const handleClear = () => {
        setSearchText('');
        console.log('Search cleared');
    };
      
    const handleClick = () => {
        console.log("Welcome");
        router.push("/signup");
    };

    return (
        <View style={styles.container}>
            
            <ScrollView>
            <SearchBar
                value={searchText}
                onChangeText={handleSearch}
                onClear={handleClear}
                placeholder="Search"
                containerStyle={styles.searchBar}
            />
            
                <PlanCard
                    title="Moreton Island"
                    imageUri="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS8Nvsg7UIChL1qdfvfCFOUmZdLoFz54Rz5fCU-2KU57gsgSooAhNNpqXAFFrKSn0VxmL22wr9IFGikXvzUf6m0wJT_2yxWx7HRo0v3wUE"
                    labels={[
                    { text: 'Individual', color: '#FF5733' },
                    { text: 'Day Time', color: '#007BFF' },
                    ]}
                    rating={4.8}
                    reviewCount={2500}
                    description="Brisbane to Moreton Island: 4WD, sand dunes, kayaking, snorkeling at Tangalooma."
                    cost="300"
                />
                <PlanCard
                    title="Moreton Island"
                    imageUri="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS8Nvsg7UIChL1qdfvfCFOUmZdLoFz54Rz5fCU-2KU57gsgSooAhNNpqXAFFrKSn0VxmL22wr9IFGikXvzUf6m0wJT_2yxWx7HRo0v3wUE"
                    labels={[
                    { text: 'Individual', color: '#FF5733' },
                    { text: 'Day Time', color: '#007BFF' },
                    ]}
                    rating={4.8}
                    reviewCount={2500}
                    description="Brisbane to Moreton Island: 4WD, sand dunes, kayaking, snorkeling at Tangalooma."
                    cost="300"
                />
            </ScrollView>
            <MenuBar/>
        </View>
      );

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchBar: {
        width: '100%',
        marginBottom:30,
    },

});
  

