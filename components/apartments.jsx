import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { Slider } from 'react-native-elements';
import Geolocation from '@react-native-community/geolocation';
import styles from './apartments.style';

const Apartments = () => {
  const [latitude, setLatitude] = useState(38.5449);
  const [longitude, setLongitude] = useState(-121.7405);
  const [searchText, setSearchText] = useState('');
  const [distance, setDistance] = useState(20);
  const [apartments, setApartments] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [selectedApartment, setSelectedApartment] = useState(null);

  useEffect(() => {
    getMyLocation();
  }, []);

  const getMyLocation = () => {
    Geolocation.getCurrentPosition((loc) => {
      setLatitude(loc.coords.latitude);
      setLongitude(loc.coords.longitude);
    });
  };

  const handleSearch = () => {
    console.log('Search text:', searchText);
  };

  const searchSection = () => {
    return (
      <View style={{ height: '35%', flexDirection: 'column',justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 28, margin: 15 }}>
          Find an apartment
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search for an apartment"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ textAlign: 'center', marginBottom: -5, marginTop: -5 }}>Distance: Mi</Text>
          <Slider
            value={distance}
            maximumValue={50}
            minimumValue={1}
            onValueChange={setDistance}
            step={1}
            allowTouchTrack
            thumbStyle={{ height: 10, width: 10, backgroundColor: 'black' }}
          />
        </View>

        <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: -12, gap: 20 }}>
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Text style={styles.nextBtn}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Text style={styles.nextBtn}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const mapSection = () => {
    return (
      <View style={{ height: '65%' }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ flexDirection: 'column', paddingTop: 42, backgroundColor: 'white', }}>
      {searchSection()}
      {mapSection()}
    </View>
  );
};

export default Apartments;