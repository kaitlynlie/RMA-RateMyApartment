import React from 'react';
import useFetch from '../hook/useFetch';
import { View, Text, Button } from 'react-native';

const MyComponent = () => {
  const { data, isLoading, error, refetch } = useFetch('https://apartments-com.p.rapidapi.com/typeahead');

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.error(error);
    return (
      <View>
        <Text>Error occurred:</Text>
        <Text>{error.message}</Text>
        <Text>{error.name}</Text>
        <Text>{error.code}</Text>
        {/* Render other properties as needed */}
        <Button title="Refresh" onPress={refetch} />
      </View>
    );
  }

  return (
    <View>
      {data.map((item) => (
        <View key={item.id}>
          <Text>Name: {item.name}</Text>
          <Text>Location: {item.location}</Text>
          {/* Render other properties as needed */}
        </View>
      ))}
      <Button title="Refresh" onPress={refetch} />
    </View>
  );
};

export default MyComponent;