import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Signin from "../pages/Singin";
import Menu from "../pages/Menu";
import Qr from "../pages/Qr";
import Called from "../pages/Called";

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signin"
          component={Signin}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Menu"
          component={Menu}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Qr"
          component={Qr}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Called"
          component={Called}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
