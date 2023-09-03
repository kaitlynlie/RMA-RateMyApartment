import React from 'react';
import { ImageBackground, View, ScrollView, SafeAreaView , StyleSheet, Text} from 'react-native';
import styles from './apartments.style';
import MapView from 'react-native-maps';


const Apartments = () => {
  return(
    <View style={{ flex: 1 }}>
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </View>
  )
}

export default Apartments;
