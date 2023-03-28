import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "TiltPrism-Regular" }}>MapScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
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
          Не бажаєте відмітити геолокацію?
          <Text
            style={{
              fontFamily: "TiltPrism-Regular",
              fontSize: 16,
              color: "#1B4371",
            }}
          >
            {" "}
            Вийти з гео
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
