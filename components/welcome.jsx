import React, { useState } from 'react'
import { View, Text, TextInput, Image, FlatList, ImageBackground, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from './welcome.style'
import { blob1, blob2, logo } from '../assets/images'
// import { COLORS, images, icons, SIZES } from '../../../constants'
import { Apartments } from '.'
import { useNavigation } from '@react-navigation/native'

// welcome page
//TODO: buttons for next page dont work sob

const Welcome = ({searchEmail, setSearchEmail, searchPassword, setSearchPassword, handleClick}) => {
  // const router = useRouter();
  // const [selectedBtn, setSelectedBtn] = useState();
  // const navigation = useNavigation();
  // const handleBtnPress = (item) => {
  //   router.push(`/apartments/${item.id}`);
  //   setSelectedBtn(item.id);
  // }
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate("Apartments");
    console.log('Next button pressed'); // Add this console.log statement
  };

  const [email, setEmail] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const [pw, setPw] = useState('');

  const handlePwChange = (text) => {
    setPw(text);
  };

  return (
    <View style={{    flex:1,
      padding: 16,}}>
        <ImageBackground source = {blob1} style={styles.blob}/>
        <ImageBackground source = {blob2} style={styles.blobbot}/>

        <View styles={styles.container}> 
        <Image source = {logo} style = {styles.logo}/>
        <Text numberOfLines = {2} style={styles.welcomeMessage}>Rate My Apartment</Text>

          <TextInput
            placeholderTextColor="gray"
            numberOfLines={1}
            autoCapitalize="none"
            style={styles.emailInput}
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Email: "
          />
          <View style={styles.emailunderline} />
            <TextInput placeholderTextColor={'gray'} secureTextEntry={true} style={styles.passwordInput}
              value={pw}
              onChangeText={handlePwChange}
              placeholder="Password: "
            />
          <View style={styles.pwunderline} />

         <View style={styles.button}>
          <TouchableOpacity style={styles.searchBtn} onPress={handleNext}>
          <Text style={styles.nextBtn}>Next</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.bottomContainer} onPress={() =>{}}>
          <Text style={styles.newMsg}>New? Sign up!</Text>
          </TouchableOpacity>
        </View> 
      </View> 
    </View>
  )
}

export default Welcome