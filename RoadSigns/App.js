import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './components/DetailScreen';
import SignsListScreen from './components/SignsList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Signs" component={SignsListScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App