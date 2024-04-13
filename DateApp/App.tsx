import React from "react";
import HomeScreen from "./app/screens/HomeScreen";
import ChatScreen from "./app/screens/ChatScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import ChatDetailsScreen from "./app/screens/ChatDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const RouteStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const { colorScheme } = useColorScheme();
  const HomeTabs = () => {
    return(
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Chat") {
              iconName = "chatbubbles-outline";
            } else if (route.name === "Matches") {
              iconName = "heart-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            }

            const customizeSize = 25;

            return (
              <Ionicons 
                id={iconName}
                size={customizeSize}
                color={focused ? "#3B82F6" : "gray"}
              />
            );
          },

          tabBarActiveTintColor: "#3B82F6",
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          tabBarInactiveTintColor: "gray",
          // tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: colorScheme == "dark" ? "black" : "white",
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <RouteStack.Navigator initialRouteName='HomeTabs'>
        <RouteStack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false}} />
        <RouteStack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false}} />
        
        <RouteStack.Screen name="HomeTabs" component={HomeTabs} />
      </RouteStack.Navigator>
    </NavigationContainer>
  );
}

