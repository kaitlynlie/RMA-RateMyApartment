import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './welcome.style'
import { blob1, blob2, logo } from '../assets/images'
import { useNavigation } from '@react-navigation/native'

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
    //console.log('Next button pressed');
  };

  // const [email, setEmail] = useState('');

  // const handleEmailChange = (text) => {
  //   setEmail(text);
  // };

  // const [pw, setPw] = useState('');

  // const handlePwChange = (text) => {
  //   setPw(text);
  // };

  return (
    <View style={{    flex:1,
      padding: 16,}}>
        <ImageBackground source = {blob1} style={styles.blob}/>
        <ImageBackground source = {blob2} style={styles.blobbot}/>

        <View styles={styles.container}> 
        <Image source = {logo} style = {styles.logo}/>
        <Text numberOfLines = {2} style={styles.welcomeMessage}>Rate My Apartment</Text>

          {/* <TextInput
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
          <View style={styles.pwunderline} /> */}

         <View style={styles.button}>
          <TouchableOpacity style={styles.searchBtn} onPress={handleNext}>
          <Text style={styles.nextBtn}>Next</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style = {styles.bottomContainer} onPress={() =>{}}>
          <Text style={styles.newMsg}>New? Sign up!</Text>
          </TouchableOpacity> */}

        </View> 
      </View> 
    </View>
  )
}

export default Welcome