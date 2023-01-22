import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet } from "react-native-paper";
import { Restaurantscreens } from "./scr/features/restaurants/screens/restaurants-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { Ionicons } from '@expo/vector-icons/Ionicons';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
//import { restaurantRequest} from './scr/services/restaurant/restaurant.service';
import { RestaurantsContextProvider } from "./scr/services/restaurant/restaurant.context";
import { LocationContextProvider } from "./scr/services/location/location.context";



const Tab = createBottomTabNavigator();

function Map (){
  return(
<Text>
 Maps
</Text>
  );
}
function Settings(){
  return(
  <Text >
    Settings
  </Text>
  );
  }

export default function App() {
  return (
    <>
<LocationContextProvider>
<RestaurantsContextProvider>
      <NavigationContainer>
     
      <Tab.Navigator>
      <Tab.Screen name="Restaurants" component={Restaurantscreens} />
        <Tab.Screen name="Maps" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    
      </NavigationContainer>
     
</RestaurantsContextProvider>
</LocationContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

