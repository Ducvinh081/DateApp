import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "nativewind";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import WelcomeScreen from "../screens/WelcomeScreens";
import ChatScreen from "../screens/ChatScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatDetailsScreen from "../screens/ChatDetailsScreen";
import LoginScreen from "../screens/Login";
import { auth } from "../../FirebaseConfig";
import {User, onAuthStateChanged} from "firebase/auth";
// Define the screen parameters
type RootStackParamList = {
  Welcome: undefined;
  Chat: undefined;
  Home: undefined;
  HomeTabs: undefined;
  ChatDetails: undefined;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigation: React.FC = () => {
const { colorScheme } = useColorScheme();
const [user, setUser] = useState<User | null>(null);

// Check if user is already authenticated
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

}, []);

  const HomeTabs = () => {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName: string | undefined;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Chat") {
            iconName = "chat-bubble-outline";
          } else if (route.name === "Matches") {
            iconName = "heart-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          }

          const customizeSize = 25;

          return iconName ? (
            <MaterialIcons
              name={iconName}
              size={customizeSize}
              color={focused ? "#3B82F6" : "gray"}
            />
          ): null;
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
      <Stack.Navigator
        initialRouteName="HomeTabs"
        screenOptions={{headerShown: false}}
      >
        {user? (
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        ):
        (
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        )
      }
      
        <Stack.Screen name="ChatDetails" 
          component={ChatDetailsScreen}
          options={{
            presentation: "modal",
          }}  
        />
      
      <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;