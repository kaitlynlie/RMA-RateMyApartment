import { useState } from 'react';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Welcome, Apartments, Apartment, CreateReview } from './components';

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

        <Stack.Screen
          name="Apartment"
          component={Apartment}
        />  

        <Stack.Screen
          name="CreateReview"
          component={CreateReview}
        />  
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;