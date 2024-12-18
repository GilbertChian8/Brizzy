import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FaqCard from "../../components/FaqCard";
import SearchBar from "../../components/SearchBar";
import CustomButton from "../../components/CustomButton";
import { useRouter } from "expo-router";

export default function HelpCenter() {

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
    return (
            
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <View style={styles.topSectionWrapper}>
                        {/* Header */}
                        <View style={styles.header}>
                        <Text style={styles.headerText}>Hi, how can we help you?</Text>
                        <SearchBar
                            value={searchText}
                            onChangeText={handleSearch}
                            onClear={handleClear}
                            placeholder="Search"
                            containerStyle={styles.searchBar}
                        />
                        </View>
                    </View>
                    
                    <View style={styles.contentWrapper}> 
                        {/* Frequently Asked Questions */}
                        <View style={styles.faqSection}>
                            <Text style={styles.sectionHeader}>Frequently Ask Question</Text>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={styles.cardScrollView}
                                >
                                <FaqCard
                                    title="Is Brizzy free to use?"
                                    description="Yes, currently this app is completely free to use"
                                    backgroundColor="#4A90E2"
                                />
                                <FaqCard
                                    title="Can I book flights here?"
                                    description="No, currently we do not provide booking services"
                                    backgroundColor="#F5A623"
                                />
                                <FaqCard
                                    title="Is this app only for Brisbane?"
                                    description="Yes, it is"
                                    backgroundColor="#9B51E0"
                                />
                            </ScrollView>

                        </View>
                        <View style={styles.topicSection}>
                            {/* Topics */}
                            <Text style={styles.sectionHeader}>Topics</Text>
                            <View style={styles.topicContainer}>
                                <CustomButton onPress={() => router.push("/")} label="General" color="#ffffff" textColor="#000000" style={styles.button} textStyle={{ alignSelf: 'flex-start' }} />
                                <CustomButton onPress={() => router.push("/")} label="Account" color="#ffffff" textColor="#000000" style={styles.button} textStyle={{ alignSelf: 'flex-start' }} />
                                <CustomButton onPress={() => router.push("/")} label="Privacy" color="#ffffff" textColor="#000000" style={styles.button} textStyle={{ alignSelf: 'flex-start' }} />
                            </View>
                        </View>
                        

                        {/* Back Button */}
                        <CustomButton onPress={() => router.push("../")} label="Back" color="#34378B" textColor="#fff" style={styles.backButton} textStyle={{ alignSelf: 'center' }} />
                    </View>
                    
                </View>
            </View>
            
    );
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor: "#376BF0",
    },
    container: {
        flex: 1,
        padding: 0,
        width:"100%",
        marginTop:40,
    },
    topSectionWrapper:{
        backgroundColor:"#376BF0",
        paddingVertical: 20,
    },
    header: {
        marginHorizontal:20,
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "left",
        
    },
    searchBar: {
        marginTop: 10,
        backgroundColor: "#FFF",
        width: "100%",
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 10,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 15,
        marginHorizontal:20,
    },
    contentWrapper:{
        flex:1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    faqSection:{
        
    },
    cardScrollView: {
        marginVertical: 10,
        marginLeft:20,
    },
    topicSection:{

    },
    topicContainer: {
        marginVertical: 10,
    },
    button: {
        width: "90%",
        height: 50,
        borderColor: '#000000',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 14,
        marginHorizontal:20,
        elevation: 1, // Shadow for Android
        shadowColor: "#000", // Shadow for iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    backButton: {
        alignSelf: "flex-start",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 20,
        marginLeft:20,
    },
    backButtonText: {
        color: "#FFF",
        fontWeight: "bold",
    },
});
