import React from 'react'
import { Text, View,ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';  
import Header from '../../components/Header'; 
import Trombinoscope from '../../components/trombinoscope/trombinoscope';
import MarvelP from '../../components/MarvelP'


function index() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <MarvelP/>
    </ScrollView>
  )
}

export default index