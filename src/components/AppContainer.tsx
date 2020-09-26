import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutes } from "./Navigation";
import { Theme } from "./Theme";
import DefaultAnimation from "../DefaultAnimation";
import Home from "../Home";
import RoundedIconButton from "./RoundedIconButton";
import { useTheme } from "@shopify/restyle";

const AppStack = createStackNavigator<AppRoutes>();

interface AppContainer {
  darkMode: boolean;
  setDarkMode: () => void;
}

const AppContainer = ({ darkMode, setDarkMode }: AppContainer) => {
  const theme = useTheme<Theme>();
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.mainBackground
        },
        headerTintColor: theme.colors.mainForeground,
        headerRight: () => (
          <RoundedIconButton
            onPress={setDarkMode}
            name={darkMode ? "sun" : "moon"}
            size={40}
            color="secondary"
            backgroundColor="mainBackground"
          />
        )
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="DefaultAnimation" component={DefaultAnimation} />
    </AppStack.Navigator>
  );
};

export default AppContainer;
