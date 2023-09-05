import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { apartmentData } from '../constants/data';
import styles from './apartment.style';

export default class Apartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apartment: null,
      posts: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const apartmentId = this.props.route.params.apartmentId;
    this.fetchApartment(apartmentId)
      .then(() => this.fetchPosts())
      .then(() => {
        // Set componentReady to true after fetching the apartment and posts
        this.setState({ componentReady: true });
      })
      .catch((error) => {
        console.error('Error:', error);
        // In case of an error, also set componentReady to true to prevent indefinite loading
        this.setState({ componentReady: true });
      });
  }

  fetchApartment = async (apartmentId) => {
    try {
      // Simulating the API call with a delay
      setTimeout(() => {
        const apartment = apartmentData.find((item) => item.id === apartmentId);
        if (apartment) {
          this.setState({ apartment });
        } else {
          console.error('Apartment not found');
        }
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchPosts = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/v1/posts');
    console.log('API Response:', response); // Add this line to log the response
    if (response.ok) {
      const data = await response.json();
      console.log('Received data:', data);
      const posts = data?.data || [];
      this.setState({ posts }, () => {
        // Set filteringComplete to true after updating the posts state
        this.setState({ filteringComplete: true });
      });
    } else {
      console.error('Failed to fetch posts. Status:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    this.setState({ isLoading: false });
  }
};

  handleCreate = async (apartment) => {
    this.props.navigation.navigate('CreateReview', {
      apartmentId: apartment.id,
      onSubmitReview: this.onSubmitReview,
    });
  };

  onSubmitReview = async (reviewData) => {
    // Send the review data to the server and handle the response
    try {
      // Simulating the API call with a delay
      setTimeout(() => {
        const { posts } = this.state;
        const updatedPosts = [...posts, reviewData];
        this.setState({ posts: updatedPosts });
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    const { apartment, posts, isLoading, filteringComplete, componentReady } = this.state;
    const apartmentId = apartment?.id;
    const filteredPosts = posts.filter((post) => post.apartmentId === apartmentId);
  
    if (isLoading || !componentReady) {
      return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 100 }}>
          <Text>Loading...</Text>
        </View>
      );
    }
  
    // Check if the component is ready before rendering reviews
    const reviewsComponent = componentReady ? (
      filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <View key={post._id}>
            <Text>{post.name}</Text>
            <Text>{post.review}</Text>
            <Text>Rating: {post.rating}</Text>
          </View>
        ))
      ) : (
        <Text>No reviews available</Text>
      )
    ) : null;
  
    return (
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 100 }}>
        {apartment && (
          <React.Fragment>
            <Text style={{ fontWeight: 'bold', fontSize: 28 }}>{apartment.name}</Text>
            <Text style={{ fontSize: 18, marginTop: 5 }}>{apartment.address}</Text>
          </React.Fragment>
        )}
  
        <Text style={{ fontSize: 24, marginTop: 35, fontWeight: 'bold' }}>Ratings and Reviews</Text>
  
        {reviewsComponent}
  
        {apartment && (
          <View style={{ width: 150, height: 50 }}>
            <TouchableOpacity
              style={styles.searchBtn}
              onPress={() => {
                this.handleCreate(apartment);
              }}
            >
              <Text style={styles.nextBtn}>Write a Review</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}