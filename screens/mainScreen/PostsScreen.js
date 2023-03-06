import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../nestedScreens/Home";
import MapScreen from "../nestedScreens/MapScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import { Feather } from "@expo/vector-icons";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedScreen.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <NestedScreen.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          title: "Публикации",
          headerTitleStyle: {
            fontFamily: "TiltPrism-Regular",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 17,
            lineHeight: 22,
            color: "#212121",
          },
          headerRight: () => (
            <Feather name="log-out" size={24} color="#BDBDBD" />
          ),
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          headerTitleAlign: "center",
          title: "Комментарии",
          headerTitleStyle: {
            fontFamily: "TiltPrism-Regular",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 17,
            lineHeight: 22,
            color: "#212121",
          },
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerTitleAlign: "center",
          title: "Местность...",
          headerTitleStyle: {
            fontFamily: "TiltPrism-Regular",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 17,
            lineHeight: 22,
            color: "#212121",
          },
        }}
      />
    </NestedScreen.Navigator>
  );
}
