import { useState } from 'react';
import * as React from 'react';
import { ImageBackground, View, ScrollView, SafeAreaView } from 'react-native';
// import { Stack, useRouter} from 'expo-router';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Welcome, Apartments } from './components';
import {MapView, PROVIDER_GOOGLE } from 'react-native-maps';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
      
        <Stack.Screen
          name="Apartments"
          component={Apartments}
        />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;