import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Slider } from 'react-native-elements';
import { AirbnbRating } from 'react-native-ratings';
import StarRating from 'react-native-star-rating';

const FormField = ({ label, value, onChangeText, placeholder }) => {
    return (
      <View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={{fontSize: 18, marginTop: 10}}
        />
      </View>
    );
  };

const CreateReview = () => {
    const [form, setForm] = useState({
        name: '',
        review: '',
    });

    const handleChange = (fieldName, value) => {
        setForm({ ...form, [fieldName]: value });
      };

    const [rating, setRating] = useState(3); // Initial rating value
      
    const handleRatingChange = (value) => {
        setRating(value);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 100}}>
            <Text style={{ fontWeight: 'bold', fontSize: 28}}>
              Create Your Review
            </Text>
            <FormField
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChangeText={(value) => handleChange('name', value)}
              />
              <View style={{ marginTop: 20 }}>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={rating}
                    selectedStar={handleRatingChange}
                    starSize={30}
                    fullStarColor="#FFD210"
                    halfStarColor="#FFD210"
                    emptyStarColor="#FFD210"
                    halfStarEnabled
                />
            </View>
      <Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>{rating} stars</Text>
        </View>
    )
}

export default CreateReview