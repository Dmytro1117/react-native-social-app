import React, { useCallback, useEffect, useState } from "react";
import {} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { store } from "./redux/store";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const routing = useRoute(false);
  useEffect(() => {
    async function prepare() {
      try {
        const fontsLoaded = Font.loadAsync({
          "TiltPrism-Regular":
            "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
        });
        // const fontsLoaded = Font.loadAsync({
        //   "TiltPrism-Regular": require("./fonts/TiltPrism-Regular-VariableFont_XROT,YROT.ttf"),
        // });
        await fontsLoaded;
      } catch (e) {
        console.log("fonts did not load", e.message);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
