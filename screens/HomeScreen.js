import { ScrollView, StyleSheet,FlatList,View } from 'react-native'
import React from 'react'
import Headers from './components/Headers'
import Search from './components/Search'

import Category from './components/Category'
import Choose from './components/Choose'



const HomeScreen = () => {
    
  return (
    <ScrollView>
        <Headers/>
        <Search/>
        <Category/>
        <Choose/>
       
      
    </ScrollView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({})