import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "TiltPrism-Regular" }}>CreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateScreen;
