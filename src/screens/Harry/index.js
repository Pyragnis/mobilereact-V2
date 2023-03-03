import React from 'react'
import { Text, View,ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';  
import Header from '../../components/Header'; 
import Trombinoscope from '../../components/trombinoscope/trombinoscope';


function index() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header title="harry pot de fleur "/>
      <Trombinoscope />
    </ScrollView>
  )
}

export default index