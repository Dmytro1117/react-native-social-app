import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

export default function Home({ route, navigation }) {
  const [posts, setPosts] = useState([]);
  //  console.log("route.params", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  // console.log("posts", posts);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={{ uri: item }} style={{ width: 350, height: 200 }} />
            <TouchableOpacity
              onPress={() => navigation.navigate("CommentsScreen")}
              style={{ alignSelf: "center" }}
            >
              <Text style={{ fontSize: 16, color: "#1B4371" }}>
                Оставить коментарий
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("MapScreen")}
              style={{
                marginTop: 5,
                alignSelf: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "#1B4371" }}>
                Отметить геолокацию
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
