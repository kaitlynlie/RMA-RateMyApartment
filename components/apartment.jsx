import React from 'react'
import { View, Text } from 'react-native'
import { apartmentData } from '../constants/data';
import MapView from 'react-native-maps';

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
    if (this.state.apartment != null) {
      return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 100}}>
            <Text style={{ fontWeight: 'bold', fontSize: 28}}>
              {this.state.apartment.name}
            </Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>{this.state.apartment.address}</Text>
        </View>     
      )
    }
  }
}
