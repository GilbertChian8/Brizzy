import React from "react";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faBookmark, faBookOpen, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

const TabIcon = ({ icon, color }: { icon: any; color: string }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <FontAwesomeIcon icon={icon} size={24} color={color} />
    </View>
  );
};

const TabLayout: React.FC = () => {
  return (
    <View style={{ flex: 1, overflow: "hidden", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#376BF0",
          tabBarInactiveTintColor: "#376BF0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 84,
            paddingTop: 12,
            position: "absolute", 
            overflow: "hidden",
          },
        }}
      >
        <Tabs.Screen
          name="main"
          options={{
            title: "Main",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabIcon icon={faHome} color={color} />,
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabIcon icon={faBookmark} color={color} />,
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabIcon icon={faPlus} color={color} />,
          }}
        />
        <Tabs.Screen
          name="myPlan"
          options={{
            title: "My Plan",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabIcon icon={faBookOpen} color={color} />,
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color }) => <TabIcon icon={faUser} color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabLayout;
