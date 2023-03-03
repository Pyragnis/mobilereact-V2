
import React from 'react';
import Harry from './src/screens/Harry'
import Home from './src/screens/home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View,ScrollView,Button } from 'react-native';
import Marvel from './src/screens/Marvel';



export default function App() {
  const Stack = createNativeStackNavigator();

  function HomeScreen({ navigation }) {
    return (
      <View>
        <Home/>
        <Button
          title="go to harry list"
          onPress={() => navigation.navigate('Harry')}
        />
        <Button
          title="go to Marvel login"
          onPress={() => navigation.navigate('Marvel')}
        />
      </View>
    );
  }
  
  function HarryList() {
    return (
      <ScrollView>
        <Harry/>
      </ScrollView>
    );
  }

  function Marvel() {
    return (
      <ScrollView>
        <Marvel/>
      </ScrollView>
    );
  }
  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Harry" component={HarryList} />
      <Stack.Screen name="Marvel" component={Marvel} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

