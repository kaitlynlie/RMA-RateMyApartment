import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { apartmentData } from '../constants/data';
import MapView from 'react-native-maps';
import styles from './apartment.style';
import CreateReview from './createreview';

export default class Apartment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      apartment: null
    }
  }

  componentDidMount = () => {
    let apartmentId = this.props.route.params.apartmentId
    let selectedApartment = apartmentData.filter(g => g.id === apartmentId)[0]
    console.log(selectedApartment)
    this.setState({
      apartment: selectedApartment
    })
  }


  render() {
    const handleCreate = (apartment) => {
      this.props.navigation.navigate(
        'CreateReview',
        {
          apartmentId: apartment.id
        }
      )
    }

    if (this.state.apartment != null) {
      return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 100}}>
            <Text style={{ fontWeight: 'bold', fontSize: 28}}>
              {this.state.apartment.name}
            </Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>{this.state.apartment.address}</Text>

            <Text style={{ fontSize: 24, marginTop: 35, fontWeight: 'bold' }}>Ratings and Reviews</Text>

            <View style= {styles.container}>
              <TouchableOpacity style={styles.searchBtn} onPress={() => {handleCreate(this.state.apartment)}}>
              <Text style={styles.nextBtn}>Write a Review</Text>
            </TouchableOpacity>
          </View>
        </View>     
      )
    }
  }
}
