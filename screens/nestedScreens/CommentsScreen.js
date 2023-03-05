import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CommentsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>CommentsScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          marginTop: 20,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 16, color: "#1B4371" }}>
          Не бажаєте лишити коментар?
          <Text style={{ fontSize: 16, color: "#1B4371" }}>
            {" "}
            Вийти з комента
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
