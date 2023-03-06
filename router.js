import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import LoginScreen from "./screens/auth/LoginScreen";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import CreateScreen from "./screens/mainScreen/CreateScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";
import { Feather, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
const AuthStack = createStackNavigator();
const MainTab = createMaterialBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      labeled={false}
      barStyle={{ backgroundColor: "#FFFFFF", height: 83 }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={24} color="#616161" />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />

      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: (focused, size, color) => (
            <AntDesign name="plus" size={18} color="#fff" />
          ),
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: (focused, size, color) => (
            <AntDesign name="user" size={24} color="#616161" />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
