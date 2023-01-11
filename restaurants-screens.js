import React from 'react';
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { RestaurantInfo } from '../../components/restaurants-info-card';

export const Restaurantscreens = () => (


<SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        
        <View style={styles.list}>
          <FlatList
          data={[{name:1},{name:2},{name:3},{name:5},{name:6}]}
          renderItem={() => < RestaurantInfo />}
          keyExtractor={(item)=> item.name}
          contentContainerStyle={{padding:5}}

          />
        
        </View>
      </SafeAreaView>



)
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      padding:30,
    },
    search: {
      padding: 30,
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: "white",
    },
  });