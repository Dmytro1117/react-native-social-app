import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

export default function CreateScreen({ navigation }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [location, setLocation] = useState(null);
  const [comment, setComment] = useState("");
  const [locationText, setLocationText] = useState("");

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    const newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
    const location = await Location.getCurrentPositionAsync();
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
    setLocation(location.coords);
  };

  if (photo) {
    let savePhoto = () => {
      navigation.navigate("Home", photo.uri);
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <TextInput
          placeholder="Название"
          placeholderTextColor="#BDBDBD"
          name="comment"
          value={comment}
          onChangeText={(value) => setComment(value)}
        />
        <TextInput
          placeholder="Местность "
          placeholderTextColor="#BDBDBD"
          name="locationText"
          value={locationText}
          onChangeText={(value) => setLocationText(value)}
        />
        {hasMediaLibraryPermission ? (
          <TouchableOpacity onPress={savePhoto} style={styles.sendBtn}>
            <Text style={styles.sendLabel}>Опубликовать</Text>
          </TouchableOpacity>
        ) : undefined}
        <TouchableOpacity
          onPress={() => setPhoto(undefined)}
          style={styles.sendBtn}
        >
          <Text style={styles.sendLabel}>Удалить</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <TouchableOpacity onPress={takePic} style={styles.snapContainer}>
        <Text style={styles.snap}>Click</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 40,
    borderWidth: 2,
    borderColor: "#20b2aa",
    borderRadius: 10,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: {
    color: "#20b2aa",
    fontSize: 20,
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
