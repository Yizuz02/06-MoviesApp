import { NavigationContainer } from "@react-navigation/native"
import { View, Text } from "react-native"
import { HomeScreen } from "./presentation/screens/home/HomeScreen"
import { Navigation } from "./presentation/navigation/Navigation"

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}
