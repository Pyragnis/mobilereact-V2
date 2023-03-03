import React from 'react'
import { Text, View,ScrollView,Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../../components/Header';  



function index() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header title="Marvel"/>
      <Button
        title="Go to trombinoscope"
        onPress={() => navigation.navigate('Harry')}
      />
    </ScrollView>
  )
}

export default index