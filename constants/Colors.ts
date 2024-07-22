/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    tabGreen: "#31A063",
    tabGray: "#6C6C6C",
    text: "#000000",
    background: "#F9F8F4",
    tint: tintColorLight,
    icon: "#31A063",
    // tabIconDefault: "#6C6C6C",
    // tabIconSelected: "#31A063",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#31A063",
    tabIconDefault: "#6C6C6C",
    tabIconSelected: "#31A063",
  },
};
