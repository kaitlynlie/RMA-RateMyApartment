import React from 'react';
import { ImageBackground, View, ScrollView, SafeAreaView , StyleSheet, Text} from 'react-native';
import styles from './apartments.style';


const Apartments = () => {
  return(
      <View>
       <Text numberOfLines = {2} style={styles.welcomeMessage}>Rate My Apartment</Text>
      </View>
  )
}

export default Apartments;
