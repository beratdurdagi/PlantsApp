import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons,

AntDesign,Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
const navigation=useNavigation();
  return (
    <View style={{justifyContent:'space-between',flexDirection:'row'}}>
      <Ionicons onPress={()=>navigation.goBack()} name="arrow-back" size={24} color="black" />
      <Entypo name="shopping-cart" size={24} color="black" />
      
    </View>
  )
}