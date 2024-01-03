import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import COLORS from "../constants/colors";

export const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
};

export const Default = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    ...COLORS,
  },
};
