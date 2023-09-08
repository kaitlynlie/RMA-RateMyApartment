import styles from './apartments.style';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { Slider } from 'react-native-elements';
import {apartmentData} from '../constants/data'
import { logo } from '../assets/images'
import PropTypes from 'deprecated-react-native-prop-types'

export default class Apartments extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        latitude: 38.53851496070686,
        longitude: -121.75403644229301,
        apartments: [],
        searchString: '',
        distance: 4,
        selectedApartment: null,
      };
    };

    componentDidMount = () => {
      this.setState({
        apartments: apartmentData
      })
    }


 searchSection = () => {

  function getDistanceInMiles(lat1, lon1, lat2, lon2) {
    const earthRadiusInMiles = 3958.8; 
  
    // lat and long in radians
    const lat1Rad = degToRad(lat1);
    const lon1Rad = degToRad(lon1);
    const lat2Rad = degToRad(lat2);
    const lon2Rad = degToRad(lon2);
  
    // diff between coordinates
    const latDiff = lat2Rad - lat1Rad;
    const lonDiff = lon2Rad - lon1Rad;
  
    // calculated distance
    const a =
      Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
      Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadiusInMiles * c;
  
    return distance;
  }
  
  // converts deg into rad
  function degToRad(degrees) {
    return degrees * (Math.PI / 180);
  }

    const handleSearch = () => {
      let filteredApartments = apartmentData.filter(g => g.name.toLowerCase().includes(this.state.searchString.toLowerCase()) && getDistanceInMiles(this.state.latitude, this.state.longitude, g.latitude, g.longitude) < this.state.distance ) 
      this.setState({
        apartments: filteredApartments
      })
    }

    const handleReset = () => {
      this.setState({ apartments: apartmentData})
    }

    return (
      <View style={{ height: '35%', flexDirection: 'column',justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 28, margin: 15 }}>
          Find an apartment
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search for an apartment"
            ref={search => this.search = search}
            onChangeText={(text) => {this.setState({searchString: text})}}
            value={this.state.searchString}
            autoCapitalize="none"
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ textAlign: 'center', marginBottom: -5, marginTop: -5 }}>
            Distance: {this.state.distance.toString() } mi
          </Text>
          <Slider
     
            value={this.state.distance}
            maximumValue={4}
            minimumValue={0}
            onValueChange={(value) => {
              const roundedValue = parseFloat(value.toFixed(1));
              this.setState({ distance: roundedValue });
            }}
            step={0.2}
            allowTouchTrack
            thumbStyle={{ height: 20, width: 20, backgroundColor: '#FFD210' }}
          />
        </View>

        <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: -12, gap: 20 }}>
          <TouchableOpacity style={styles.searchBtn} onPress={() => {handleSearch()}}>
            <Text style={styles.nextBtn}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.searchBtn} onPress={() => {handleReset()}}>
            <Text style={styles.nextBtn}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  mapSection = () => {

    const selectApartment = (apartment) => {
      this.props.navigation.navigate(
        'Apartment',
        {
          apartmentId: apartment.id
        }
      )
    }

    return (
      <View style={{ height: '65%' }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 38.5449,
            longitude: -121.7405,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
{this.state.apartments.map((iapartment) => {
  return (
    <Marker
      key={iapartment.id}
      coordinate={{ latitude: iapartment.latitude, longitude: iapartment.longitude }}
    >
      <Callout style={{ height: 150, width: 150 }} onPress={() => { selectApartment(iapartment) }}>
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{iapartment.name}</Text>
          <Image style={{ width: 80, height: 80 }} source= {logo} />
          <TouchableOpacity style={styles.searchBtn} onPress={() => {handleSubmitReview}}>
              <Text style={styles.reviewBtn}>Reviews</Text>
            </TouchableOpacity>
        </View>
      </Callout>
    </Marker>
  );
})}
        </MapView>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flexDirection: 'column', paddingTop: 42, backgroundColor: 'white', }}>
        {this.searchSection()}
        {this.mapSection()}
      </View>
    );
  };
};
