import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { apartmentData } from '../constants/data';
import styles from './apartment.style';
import StarRating from 'react-native-star-rating';

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
    console.log('Apartment component mounted');
    const apartmentId = this.props.route.params.apartmentId;
    this.fetchApartment(apartmentId)
      .then(() => this.fetchPosts())
      .then(() => {
        this.setState({ componentReady: true });
      })
      .catch((error) => {
        console.error('Error:', error);
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
    // console.log('API Response:', response);
    if (response.ok) {
      const data = await response.json();
      console.log('Received data:', data);
      const posts = data?.data || [];
      this.setState({ posts }, () => {
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
    try {
      // Send the review data to the server and handle the response
      const response = await fetch('http://localhost:8080/api/v1/submitReview', {
        method: 'POST',
        body: JSON.stringify(reviewData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        await this.fetchPosts();
      } else {
        console.error('Failed to submit review. Status:', response.status);
      }
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

    const reviewsComponent = componentReady ? (
      filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <View key={post._id} style={styles.reviewBox}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{post.name}</Text>
            <Text style={{ marginTop: 10 }}>{post.review}</Text>
            <Text style={{ marginTop: 20 }}>Rating: {post.rating}</Text>
            <View style={{ width: 30 }}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={post.rating}
              starSize={20}
              fullStarColor="gold"
              emptyStarColor="gray"
              starStyle={{ marginRight: 5 }}
            />
            </View>
          </View>
        ))
      ) : (
        <Text>No reviews available</Text>
      )
    ) : null;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingTop: 100 }} showsVerticalScrollIndicator={false}>
          {apartment && (
            <>
              <Text style={{ fontWeight: 'bold', fontSize: 28 }}>{apartment.name}</Text>
              <Text style={{ fontSize: 18, marginTop: 5 }}>{apartment.address}</Text>
            </>
          )}

          <Text style={{ fontSize: 24, marginTop: 35, fontWeight: 'bold' }}>Ratings and Reviews</Text>

          {reviewsComponent}
        </ScrollView>

        <View style={{ width: 150, height: 50, alignSelf: 'center', marginBottom: 20 }}>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => {
              this.handleCreate(apartment);
            }}
          >
            <Text style={styles.nextBtn}>Write a Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
