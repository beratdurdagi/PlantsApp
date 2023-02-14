import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import COLORS from './../../consts/colors';
export default function Headers() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome to</Text>
      <Entypo name="shopping-cart" size={24} color="black" />
      </View>
      
    
      </>
  )
}   

const styles=StyleSheet.create({
    container:{
        marginTop:60,
        marginHorizontal:20,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    textStyle:{
        
        fontWeight:'bold',
        fontSize:23

    }
})