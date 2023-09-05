import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Slider } from 'react-native-elements';
import { AirbnbRating } from 'react-native-ratings';
import StarRating from 'react-native-star-rating';
import styles from './createreview.style';
import { useNavigation } from '@react-navigation/native';
import { apartmentData } from '../constants/data';
import { useRoute } from '@react-navigation/native';

const CreateReview = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); 
  const route = useRoute();
  const { apartmentId, onSubmitReview } = route.params;
    const [form, setForm] = useState({
        apartmentId: apartmentId,
        name: '',
        review: '',
        rating: 0,
    });

    const handleChange = (fieldName, value) => {
        setForm({ ...form, [fieldName]: value });
      };
      
    const handleRatingChange = (value) => {
      handleChange('rating', value);
    };

    const handleReviewChange = (text) => {
      handleChange('review', text);
    };
  
    const handleSubmitReview = async () => {
      if (form.review) {
        setLoading(true);
    
        try {
          const response = await fetch('http://localhost:8080/api/v1/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
          });
    
          if (!response.ok) {
            let errorMessage = 'An error occurred while submitting the review. Please try again.';
    
            if (response.status === 400) {
              const errorResponse = await response.json();
              if (errorResponse && errorResponse.message && errorResponse.message.errors && errorResponse.message.errors.apartmentId) {
                errorMessage = 'Validation Error: ' + errorResponse.message.errors.apartmentId.message;
              }
            } else if (response.status === 401) {
              errorMessage = 'Authorization Error: ' + (await response.text());
            } else {
              errorMessage = 'Server Error: ' + (await response.text());
            }
    
            throw new Error(errorMessage);
          }
    
          // Handle successful response
          navigation.navigate('Apartment');
        } catch (error) {
          console.error(error);
          alert(error.message);
        } finally {
          setLoading(false);
        }
      } else {
        alert('Please enter a rating and review');
      }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 100}}>
            <Text style={{ fontWeight: 'bold', fontSize: 28}}>
              Create Your Review
            </Text>
            <Text style={{ color: 'gray', marginTop: 15 }}>Rate and write your review to share with the community</Text>

            <View style={styles.searchWrapper}>
              <Text style={{ fontWeight: 'bold', marginTop: 30}}>Your Name</Text>
              <TextInput
                value={form.name}
                placeholder='Jane Doe'
                onChangeText={(value) => handleChange('name', value)}
                name='name'
                type='text'
                style={{
                  borderWidth: 1,
                  borderColor: 'gray',
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  fontSize: 16,
                  marginTop: 10,
                  width: '100%',
                }}
              />
            </View>

      <View style={styles.searchWrapper}>
      <Text style={{ fontWeight: 'bold', marginTop: 30}}>Your Review</Text>
      <TextInput
        value={form.review}
        onChangeText={handleReviewChange}
        placeholder="Write your review here"
        multiline
        numberOfLines={4}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          paddingHorizontal: 10,
          paddingVertical: 8,
          fontSize: 16,
          marginTop: 10,
          width: '100%'
        }}
      />
        </View>

        <View style={{ marginTop: 30 }}>
               <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={form.rating}
                  selectedStar={handleRatingChange}
                  starSize={30}
                  fullStarColor="#FFD210"
                  halfStarColor="#FFD210"
                  emptyStarColor="#FFD210"
                  halfStarEnabled
              />
            </View>
            <Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>{form.rating} stars</Text>
            <TouchableOpacity style={styles.searchBtn} onPress={handleSubmitReview}>
              <Text style={styles.nextBtn}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateReview