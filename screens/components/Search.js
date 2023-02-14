import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import COLORS from "../../consts/colors";
import { Ionicons,FontAwesome5 } from "@expo/vector-icons";

const widths = Dimensions.get("screen").width;

export default function Search() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.textStyle}>Plant Shop</Text>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
        <View style={{backgroundColor:COLORS.light,alignItems:'center',flexDirection:'row',height:40,width:widths/1.3,borderRadius:8}}>
            <FontAwesome5 style={{left:5}} name='search' size={24}/>
            <TextInput style={{marginLeft:10}} placeholder="Search"/>
        </View>
        <Pressable style={{marginHorizontal:10,backgroundColor:COLORS.green,height:40,justifyContent:'center',borderRadius:8,width:40,alignItems:'center'}}>
            <Ionicons name="menu" size={24}/>
        </Pressable>
    </View>
    </View>

    
   </>
  );
}

const styles = StyleSheet.create({
  container: {

    marginLeft: 20,
  },
  textStyle: {
    fontWeight: "800",
    fontSize: 28,
    color: COLORS.green,
  },
  
});
