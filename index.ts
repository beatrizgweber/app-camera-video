import { registerRootComponent } from "expo";
import { createElement } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import App from "./src/App";

function Root() {
  return createElement(SafeAreaProvider, null, createElement(App, null));
}

registerRootComponent(Root);
