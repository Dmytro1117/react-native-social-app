import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "TiltPrism-Regular" }}>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("CommentsScreen")}
        style={{
          marginTop: 20,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "TiltPrism-Regular",
            fontSize: 16,
            color: "#1B4371",
          }}
        >
          Желаете оставить коментарий?
          <Text
            style={{
              fontFamily: "TiltPrism-Regular",
              fontSize: 16,
              color: "#1B4371",
            }}
          >
            {" "}
            Оставить комент{" "}
          </Text>
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "TiltPrism-Regular",
          fontSize: 16,
          color: "#1B4371",
          margin: 20,
        }}
      >
        Можете оставить GPS координати:
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("MapScreen")}
        style={{
          marginTop: 20,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "TiltPrism-Regular",
            fontSize: 16,
            color: "#1B4371",
          }}
        >
          Желаете отметить геолокацию?
          <Text
            style={{
              fontFamily: "TiltPrism-Regular",
              fontSize: 16,
              color: "#1B4371",
            }}
          >
            {" "}
            Гео
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
