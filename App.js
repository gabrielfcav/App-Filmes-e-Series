import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform, ScrollView } from "react-native";

// import all the screen components
import MainScreen from "./screens/MainScreen";
import ListingScreen from "./screens/ListingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="ListingScreen"
            component={ListingScreen}
            options={({ route }) => {
              return {
                title:
                  route.params.programType === "Filmes" ? "Series" : "Buscar",
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
