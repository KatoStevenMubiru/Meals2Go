import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { useFonts as useOswald,Oswald_400Regular,} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {SvgXml} from 'react-native-svg';
import star from "../../../assets/star";
import open from "../../../assets/open";
  
  

export const RestaurantInfo = ({restaurant = {}}) => {

   const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });
    const [latoLoaded] = useLato({
        Lato_400Regular,
    })

    const {name ='Jaja mata Restaurant',
     photos = ['https://partiesenevents.com/wp-content/uploads/2018/09/catering-services-for-weddings-in-Uganda-wedding-introduction-kuhingira-caterers-in-Kampala-Uganda-is-2krestaurant-uganda5.jpg'],
      icon ='https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
       address = '122 Kampala Highway',
        isOpenNow = true, 
        rating = 4, 
        isClosedTempolary  
    } = restaurant;

    if (!oswaldLoaded || !latoLoaded){
          return  null;

    }// end of if
    const ratingArray = Array.from(new Array(Math.ceil(rating)));

    return <> 
    <Card elevation={5} style={styles.card}>
      <Card.Cover key ={name} style={styles.cover} source = {{uri :photos[0]}} />
<View>
    <Text style={styles.title }>{name}</Text>
    <View style={styles.svg}>
    {ratingArray.map(()=> (
          <SvgXml xml={star} width={20} height={20} />
          )) }
            <View style={styles.open}>
                 { isOpenNow && <SvgXml xml={open} width={20} height={20}  />}
                 {isClosedTempolary && (
              <Text variant="label" style={{ color: "red" }}>
                CL
              </Text>
            )}
             </View>
            
             
   </View>
    <Text style ={styles.address}>{address}</Text>
  
</View>

    </Card>
    
    </>
}

const styles = StyleSheet.create({

cover:{
    padding: 20,
    backgroundColor: 'white',
    
},
card:{
    backgroundColor: 'white'
},

title:{
padding : 16,
fontFamily: 'Lato_400Regular',
fontSize: 18,

},
address:{
    padding: 10,
    fontFamily:'Oswald_400Regular',
   
},
svg:{
flexDirection: 'row',
padding:8,

},
open:{
paddingHorizontal: 250,
},
closed:{
    color:'red',
}


})


