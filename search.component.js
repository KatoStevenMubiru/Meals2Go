import React ,{useContext , useState}from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { LocationContext } from "../../services/location/location.context";

export const Search = () =>{
    
    const {keyword} = useContext(LocationContext)
    const[searchKeyword, setSearchKeyword] = useState(keyword)
    return(
<View style={styles.search}>
          <Searchbar 
          placeholder="Search restaurant location"
          placeholderTextColor={'gray'}
          value={keyword}
          />
        </View>

)};

const styles = StyleSheet.create({
    search: {
        padding: 30,
      },
})

